import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export default class AuthGuard implements CanActivate {
  // eslint-disable-next-line class-methods-use-this
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    let authorization: string | undefined;
    context.getArgs().forEach((arg) => {
      if (arg && arg.authorization) {
        authorization = arg.authorization;
      }
    });

    return !!authorization;
  }
}
