import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAccountEntity1598958607378 implements MigrationInterface {
  name = 'createAccountEntity1598958607378';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `accounts` (`id` varchar(36) NOT NULL, `updated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted` timestamp(6) NULL, `name` varchar(255) NOT NULL, `address` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `certification` json NULL, `timesheet_available` json NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `accounts`');
  }
}
