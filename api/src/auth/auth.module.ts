import { Module } from '@nestjs/common';
import { AuthModule as BetterAuthModule } from '@thallesp/nestjs-better-auth';
// import { NodePgDatabase } from 'drizzle-orm/node-postgres';
// import { drizzleAdapter } from 'better-auth/adapters/drizzle';
// import { betterAuth } from 'better-auth';
// import { DatabaseModule } from 'src/database/database.module';
// import { DATABASE_PROVIDER } from 'src/database/drizzle.provider';
// import * as schema from 'src/database/models/schema';
// import { openAPI } from 'better-auth/plugins';
import { authConfig } from './config';

@Module({
  imports: [
    // BetterAuthModule.forRootAsync({
    //   imports: [DatabaseModule],
    //   useFactory: (database: NodePgDatabase) => ({
    //     auth: betterAuth({
    //       database: drizzleAdapter(database, {
    //         provider: 'pg',
    //         schema: schema,
    //       }),
    //       plugins: [openAPI()],
    //     }),
    //   }),
    //   inject: [DATABASE_PROVIDER],
    // }),

    BetterAuthModule.forRoot({ auth: authConfig }),
  ],
  exports: [BetterAuthModule],
})
export class AuthModule {}

// import { Module } from '@nestjs/common';
// import { authConfig } from './config';
// import { AuthController } from './auth.controller';
// import { BetterAuthService } from './services/betterAuth.service';
// import { AuthService } from './services/auth.service';
// @Module({
//   imports: [],
//   controllers: [AuthController],
//   providers: [
//     {
//       provide: 'BETTER_AUTH_INSTANCE',
//       useValue: authConfig,
//     },
//     BetterAuthService,
//     AuthService,
//   ],
//   exports: [AuthService],
// })
// export class AuthModule {}
