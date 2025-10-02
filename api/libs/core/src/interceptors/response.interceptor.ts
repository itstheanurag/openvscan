import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { I18nService } from 'nestjs-i18n';
import { ResponseMessageKey } from '../decorators';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
  constructor(private readonly i18n: I18nService) {}

  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const lang = request.headers['lang'] || 'en';
    let message = Reflect.getMetadata(ResponseMessageKey, context.getHandler());
    // console.log(typeof this.i18n.translate);
    // console.log(this.i18n);
    if (message && this.i18n) {
      message = this.i18n.translate(message, { lang });
    }

    return next.handle().pipe(map((data) => ({ data, message })));
  }
}
