import { ExecutionContext,   UnauthorizedException, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  public canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  public handleRequest(err, user) {
    if (err) { throw err }

    if (!user) {
      throw new UnauthorizedException(
        'Available only for authorized users',
      );
    }
    return user;
  }
}