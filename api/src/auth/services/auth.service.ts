import { Injectable } from '@nestjs/common';
import { BetterAuthService } from './betterAuth.service';
import { LoginDto, RegisterDto } from '../dtos';

@Injectable()
export class AuthService {
  constructor(private readonly betterAuthService: BetterAuthService) {}

  register(data: RegisterDto) {
    try {
      return this.betterAuthService.betterAuthApi.signUpEmail({
        body: {
          name: data.name,
          email: data.email,
          password: data.password,
        },
      });
    } catch (err) {
      console.log('ERROR IN REGISRE', err);
    }
  }

  async login(data: LoginDto) {
    return this.betterAuthService.betterAuthApi.signInEmail({
      body: {
        email: data.email,
        password: data.password,
      },
    });
  }
}
