import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const GetSession = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const session = request.session;

    if (!session) {
      throw new UnauthorizedException({
        code: 'SESSION_NOT_FOUND',
        message: 'User session not found',
      });
    }

    return data ? session[data] : session;
  },
);
