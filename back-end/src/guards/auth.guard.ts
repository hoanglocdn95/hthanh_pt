import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

import { AccountService } from 'src/services/account.service';
import { jwtVerify } from 'src/common/encrypt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly accountService: AccountService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const http = context.switchToHttp();
    const { headers } = http.getRequest();
    const response = http.getResponse();
    response.setHeader('Cache-Control', 'no-store');

    if ((await this.accountService.login(jwtVerify(headers.authentization).data))) {
      return true;
    } else {
      throw new UnauthorizedException();
    }
  }
}
