import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './controllers/app.controller';
import { AccountController } from './controllers/account.controller';
import { AccountService } from './services/account.service';
import { AccountEntity } from './entities/account.entity';
import { ScheduleEntity } from './entities/schedule.entity';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature([AccountEntity, ScheduleEntity])],
  controllers: [AppController, AccountController],
  providers: [AccountService],
})
export class AppModule {}
