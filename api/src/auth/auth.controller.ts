import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './services';
import { ApiTags } from '@nestjs/swagger';
import { LoginDto, RegisterDto } from './dtos';

@Controller('auth')
@ApiTags('auth (Authentication flow)')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body(new ValidationPipe()) data: RegisterDto) {
    return this.authService.register(data);
  }

  @Post('login')
  async login(@Body(new ValidationPipe()) data: LoginDto) {
    return await this.authService.login(data);
  }
}
