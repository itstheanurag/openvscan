import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { ServerOptions } from './server.interface';
import {
  DynamicModule,
  ForwardReference,
  Type,
  UseInterceptors,
  VersioningType,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from '@fastify/helmet';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import {
  ExceptionInterceptor,
  ResponseInterceptor,
} from '@app/core/interceptors';
import { I18nService } from 'nestjs-i18n';

type ModuleType = Type<any> | DynamicModule | ForwardReference;

export class HttpSetupClass {
  static async server(module: ModuleType, options?: ServerOptions) {
    const app = await NestFactory.create<NestFastifyApplication>(
      module,
      new FastifyAdapter(),
    );

    const config = app.get<ConfigService>(ConfigService);

    if (options?.enableVersioning) {
      app.enableVersioning({
        type: VersioningType.URI,
        prefix: 'api/v',
        defaultVersion: '1',
      });
    }

    if (options?.enableApiDocumentation) {
      const appName = process.env.npm_package_name || 'App';
      const appVersion = process.env.npm_package_version || '1.0.0';

      const documentBuilder = new DocumentBuilder()
        .setTitle(appName)
        .setDescription(
          `${appName} is a web-based vulnerability scanner that integrates open-source tools with AI to deliver smarter, faster and more reliable pre-production security testing.`,
        )
        .setVersion(appVersion)
        .addBearerAuth()
        .build();

      const swaggerDocument = SwaggerModule.createDocument(
        app,
        documentBuilder,
      );

      SwaggerModule.setup('api/docs', app, swaggerDocument, {
        swaggerOptions: { persistAuthorization: true },
      });
    }

    await app.register(helmet);

    const i18nService =
      app.get<I18nService<Record<string, unknown>>>(I18nService);

    // console.log('HTTP_SETUP_CLASS', 'i18nService', i18nService);
    app.useGlobalInterceptors(
      new ExceptionInterceptor(),
      new ResponseInterceptor(i18nService),
    );

    const port = options?.port || config?.get<number>('PORT', 3000);
    await app.listen(port, '0.0.0.0');
    console.log(`Server is running on: ${await app.getUrl()}`);
  }

  private setupCors(app: NestFastifyApplication, config: ConfigService) {
    const allowedOrigins = config
      .get<string>('CORS_ALLOWED_ORIGINS', '')
      .split(',')
      .filter(Boolean);

    const allowedMethods = config
      .get<string>('CORS_ALLOWED_METHODS', '')
      .split(',')
      .filter(Boolean);

    app.enableCors({
      origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
          callback(null, true);
        } else {
          console.error(`Blocked by CORS: ${origin}`);
          callback(new Error('Not allowed by CORS'), false);
        }
      },
      methods: allowedMethods,
      credentials: true,
    });
  }
}
