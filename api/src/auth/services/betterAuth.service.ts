import { Inject, Injectable } from '@nestjs/common';
import type { Auth } from 'better-auth';

@Injectable()
export class BetterAuthService<T extends { api: T['api'] } = Auth> {
  constructor(
    @Inject('BETTER_AUTH_INSTANCE')
    private readonly auth: T,
  ) {}

  get betterAuthApi(): T['api'] {
    return this.auth.api;
  }

  get betterAuthInstance(): T {
    return this.auth;
  }
}
