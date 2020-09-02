import { Controller, Post, Res, Body, HttpStatus, Get, Param } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Response } from 'express';

import { CreateAccountDTO } from 'src/dtos/create-account.dto';
import { AccountService } from 'src/services/account.service';
import { AccountDTO } from 'src/dtos/account.dto';

@Controller('accounts')
export class AccountController {
  constructor(
    private accountService: AccountService,
  ) {}

  @Get(':id')
  async show(
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    const account = await this.accountService.findOne(id);

    return res.status(HttpStatus.OK).json(plainToClass(AccountDTO, account));
  }

  @Post()
  async create(
    @Res() res: Response,
    @Body('account') createAccountDTO: CreateAccountDTO,
  ) {
    const account = await this.accountService.create(createAccountDTO);

    return res.status(HttpStatus.OK).json(plainToClass(AccountDTO, account));
  }
}
