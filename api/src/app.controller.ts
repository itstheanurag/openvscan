import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseMessage } from '@app/core';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ResponseMessage('app.OK')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('error')
  @ResponseMessage('app.OK')
  checkErrors() {
    return this.appService.checkError();
  }
}
