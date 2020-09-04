import {
  Controller,
  Post,
  Res,
  Body,
  HttpStatus,
  Get,
  Param,
  UseGuards,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Response } from 'express';

import { AccountService } from 'src/services/account.service';
import { AccountDTO } from 'src/dtos/account.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('accounts')
@UseGuards(AuthGuard)
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get(':id')
  async show(@Res() res: Response, @Param('id') id: string) {
    const account = await this.accountService.findOne(id);

    return res.status(HttpStatus.OK).json(plainToClass(AccountDTO, account));
  }
}
