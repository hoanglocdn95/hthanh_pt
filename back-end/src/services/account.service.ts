import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, EntityManager } from 'typeorm';
import { cloneDeep } from 'lodash';

import { AccountEntity } from 'src/entities/account.entity';
import { AuthTokenEntity } from 'src/entities/auth-token.entity';
import { CreateAccountDTO } from 'src/dtos/create-account.dto';
import { RequestLoginLogoutDTO } from 'src/dtos/request-login.dto';
import { AccountDTO } from 'src/dtos/account.dto';
import { jwtSign } from 'src/common/encrypt';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity)
    private accountRepo: Repository<AccountEntity>,
    @InjectRepository(AuthTokenEntity)
    private authTokenRepo: Repository<AuthTokenEntity>,

    private connection: Connection,
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
      .leftJoinAndSelect(
        'AccountEntity.authTokens',
        'AuthTokenEntity',
        'AuthTokenEntity.deleted IS NULL',
      )
      .where('AccountEntity.id = :id', { id })
      .getOne();
  }

  async create(createAccountDTO: CreateAccountDTO): Promise<AccountDTO> {
    const account = this.accountRepo.create(createAccountDTO);
    let token: string;
    await this.connection.transaction(async (manager: EntityManager) => {
      await manager.save(account);
      token = jwtSign({
        id: account.id,
        username: createAccountDTO.username,
        password: createAccountDTO.password,
      });
      const authToken = manager.create(AuthTokenEntity, {
        account,
        token,
      });
      await manager.save(authToken);
    });

    return { ...account, authentization: token };
  }

  async login(
    requestLoginLogoutDTO: RequestLoginLogoutDTO,
  ): Promise<AccountDTO> {
    let account: AccountEntity;
    let token: string;
    await this.connection.transaction(async (manager: EntityManager) => {
      account = await manager.createQueryBuilder(AccountEntity, 'AccountEntity')
      .where(
        'AccountEntity.username = :username AND AccountEntity.password = :password',
        requestLoginLogoutDTO,
      )
      .getOne();
      token = jwtSign({
        id: account.id,
        username: requestLoginLogoutDTO.username,
        password: requestLoginLogoutDTO.password,
      });
      const authToken = manager.create(AuthTokenEntity, { account, token });
      await manager.save(authToken);
    });

    return { ...account, authentization: token };
  }

  async logout(token: string | string[]) {
    const authToken = await this.authTokenRepo
      .createQueryBuilder()
      .innerJoinAndSelect(
        'AuthTokenEntity.account',
        'AccountEntity',
        'AccountEntity.deleted IS NULL',
      )
      .where(
        'AuthTokenEntity.token = :token',
        { token },
      )
      .getOne();
    const account = cloneDeep(authToken.account);
    if (!authToken) { throw UnauthorizedException; }
    await this.authTokenRepo.delete(authToken.id);

    return account;
  }
}
