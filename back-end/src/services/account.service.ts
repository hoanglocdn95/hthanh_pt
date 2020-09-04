import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AccountEntity } from 'src/entities/account.entity';
import { CreateAccountDTO } from 'src/dtos/create-account.dto';
import { RequestLoginDTO } from 'src/dtos/request-login.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity)
    private accountRepo: Repository<AccountEntity>,
  ) {}
  findOne(id: string): Promise<AccountEntity> {
    return this.accountRepo
      .createQueryBuilder()
      .leftJoinAndSelect(
        'AccountEntity.userSchedules',
        'UserSchedule',
        'UserSchedule.deleted IS NULL',
      )
      .leftJoinAndSelect(
        'AccountEntity.ptSchedules',
        'PtSchedule',
        'PtSchedule.deleted IS NULL',
      )
      .where('AccountEntity.id = :id', { id })
      .getOne();
  }

  create(createAccountDTO: CreateAccountDTO): Promise<AccountEntity> {
    const account = this.accountRepo.create(createAccountDTO);

    return this.accountRepo.save(account);
  }

  async login(requestLoginDTO: RequestLoginDTO): Promise<AccountEntity> {
    const account = await this.accountRepo
      .createQueryBuilder()
      .where(
        'AccountEntity.username = :username AND AccountEntity.password = :password',
        requestLoginDTO,
      )
      .getOne();

    return account;
  }
}
