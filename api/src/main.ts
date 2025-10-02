import { HttpSetupClass } from '@app/core';
import { AppModule } from './app.module';

HttpSetupClass.server(AppModule, {
  enableVersioning: false,
  enableApiDocumentation: process.env.NODE_ENV !== 'production' ? true : false,
});
