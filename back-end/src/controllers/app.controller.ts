import {
  Controller,
  Post,
  Res,
  Body,
  HttpStatus,
  Req,
  BadRequestException,
  Delete,
  UnauthorizedException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Response, Request } from 'express';

import { AccountService } from 'src/services/account.service';
import { RequestLoginLogoutDTO } from 'src/dtos/request-login.dto';
import { AccountDTO } from 'src/dtos/account.dto';
import { ErrorMessageConstant } from 'src/constants/error-message.constant';
import { CreateAccountDTO } from 'src/dtos/create-account.dto';

@Controller()
export class AppController {
  constructor(private accountService: AccountService) {}

  @Post('/login')
  async login(
    @Res() res: Response,
    @Body('login') requestLoginLogoutDTO: RequestLoginLogoutDTO,
  ) {
    const account = await this.accountService.login(requestLoginLogoutDTO);
    if (!account) {
      throw new BadRequestException(ErrorMessageConstant.loginIncorrect);
    }

    return res.status(HttpStatus.OK).json(plainToClass(AccountDTO, account));
  }

  @Post('/register')
  async create(
    @Res() res: Response,
    @Body('register') createAccountDTO: CreateAccountDTO,
  ) {
    const account = await this.accountService.create(createAccountDTO);

    return res.status(HttpStatus.OK).json(plainToClass(AccountDTO, account));
  }

  @Delete('/logout')
  async logout(@Res() res: Response, @Req() req: Request) {
    if (!req.headers.authentization) { throw UnauthorizedException; }
    const deletedAccount = await this.accountService.logout(req.headers.authentization);

    return res.status(HttpStatus.OK).json(plainToClass(AccountDTO, deletedAccount));
  }
}
