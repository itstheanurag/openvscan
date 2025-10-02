import { BaseException } from '@app/core';
import { HTTP_ERROR_MESSAGES } from '@app/core/http/http.constants';
import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'OpenVScan API is running!';
  }

  checkError() {
    //  throw new Error('app.ERROR');

    throw new BaseException('app.ERROR')
      .setName(HTTP_ERROR_MESSAGES[HttpStatus.BAD_REQUEST])
      .setStatusCode(HttpStatus.BAD_REQUEST)
      .getException();
  }
}
