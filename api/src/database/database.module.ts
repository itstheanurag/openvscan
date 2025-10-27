import { Global, Module } from '@nestjs/common';
import {
  DrizzleProvider,
  DATABASE_PROVIDER,
  NeonClientProvider,
} from './drizzle.provider';

@Global()
@Module({
  providers: [NeonClientProvider, DrizzleProvider],
  exports: [DATABASE_PROVIDER],
})
export class DatabaseModule {}
