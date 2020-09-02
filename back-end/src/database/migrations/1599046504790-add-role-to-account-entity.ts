import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddRoleToAccountEntity1599046504790 implements MigrationInterface {
  name = 'addRoleToAccountEntity1599046504790';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `accounts` ADD `role` enum (\'0\', \'1\') NOT NULL',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `accounts` DROP COLUMN `role`');
  }
}
