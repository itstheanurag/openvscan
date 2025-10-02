import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorResponseBuilder } from '../errors/error.response-builders';

@Injectable()
export class ExceptionInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((err) =>
        throwError(() => {
          const i18nContext =
            context.switchToHttp().getRequest().i18nService ?? null;

          if (i18nContext) {
            err.message = i18nContext.t(err.message);
          }

          if (
            err instanceof BadRequestException ||
            err instanceof ErrorResponseBuilder
          ) {
            return err;
          } else {
            new ErrorResponseBuilder().buildExceptionAndThrow(err);
          }
        }),
      ),
    );
  }
}
