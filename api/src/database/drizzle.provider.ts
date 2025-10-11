import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { Logger, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as schema from './models/schema';

const drizzleLogger = new Logger('DrizzleORM');

export const DATABASE_PROVIDER = 'DATABASE_PROVIDER';
export const POOL_PROVIDER = 'POOL_PROVIDER';

export const PoolProvider: Provider = {
  provide: POOL_PROVIDER,
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const databaseUrl = configService.getOrThrow<string>('DATABASE_URL');

    const pool = new Pool({
      connectionString: databaseUrl,
      ssl:
        process.env.NODE_ENV === 'production'
          ? { rejectUnauthorized: false }
          : false,
    });

    const originalQuery = pool.query.bind(pool);
    pool.query = async (...args: any[]) => {
      const start = performance.now();
      const queryText = args[0];
      const queryParams = args[1];
      try {
        const result = await originalQuery(...args);
        const duration = (performance.now() - start).toFixed(2);
        drizzleLogger.debug(
          `✅ SQL (${duration} ms): ${queryText}\nParams: ${JSON.stringify(
            queryParams,
          )}\nResult: ${JSON.stringify(result.rows, null, 2)}`,
        );
        return result;
      } catch (error) {
        const duration = (performance.now() - start).toFixed(2);
        drizzleLogger.error(
          `❌ SQL (${duration} ms): ${queryText}\nParams: ${JSON.stringify(
            queryParams,
          )}\nError: ${error.message}`,
        );
        throw error;
      }
    };

    return pool;
  },
};

export const DrizzleProvider: Provider = {
  provide: DATABASE_PROVIDER,
  inject: [POOL_PROVIDER],
  useFactory: (pool: Pool): NodePgDatabase<typeof schema> => {
    return drizzle(pool, { schema });
  },
};
