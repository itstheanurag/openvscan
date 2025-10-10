import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { Provider } from '@nestjs/common';

export const DATABASE_PROVIDER = 'DATABASE_PROVIDER';
export const POOL_PROVIDER = 'POOL_PROVIDER';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
  ssl: { rejectUnauthorized: false },
});

export const PoolProvider: Provider = {
  provide: POOL_PROVIDER,
  useValue: pool,
};

export const DrizzleProvider: Provider = {
  provide: DATABASE_PROVIDER,
  useFactory: () => drizzle(pool),
};
