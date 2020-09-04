import {
  Controller,
  Get,
  Post,
  Res,
  Body,
  HttpStatus,
  Req,
  BadRequestException,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Response } from 'express';

import { AccountService } from 'src/services/account.service';
import { RequestLoginDTO } from 'src/dtos/request-login.dto';
import { AccountDTO } from 'src/dtos/account.dto';
import { ErrorMessageConstant } from 'src/constants/error-message.constant';
import { CreateAccountDTO } from 'src/dtos/create-account.dto';

@Controller()
export class AppController {
  constructor(private accountService: AccountService) {}

  @Post('/login')
  async login(
    @Res() res: Response,
    @Body('login') requestLoginDTO: RequestLoginDTO,
  ) {
    const account = await this.accountService.login(requestLoginDTO);
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
}
