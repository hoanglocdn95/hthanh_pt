import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

import { AccountService } from 'src/services/account.service';
import { jwtVerify } from 'src/common/encrypt';
import { getRepository } from 'typeorm';
import { AuthTokenEntity } from 'src/entities/auth-token.entity';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly accountService: AccountService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const http = context.switchToHttp();
    const { headers } = http.getRequest();
    const response = http.getResponse();
    response.setHeader('Cache-Control', 'no-store');
    let data: any;
    try {
      data = jwtVerify(headers.authentization).data;
    } catch (error) {
      throw new UnauthorizedException();
    }
    const account = await this.accountService.findOne(data.id);
    const authTokens = account.authTokens.map(authToken => authToken.token);

    if (account && authTokens.includes(headers.authentization)) {
      return true;
    } else {
      throw new UnauthorizedException();
    }
  }
}
