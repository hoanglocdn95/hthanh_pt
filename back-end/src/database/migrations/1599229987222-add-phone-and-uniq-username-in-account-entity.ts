import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPhoneAndUniqUsernameInAccountEntity1599229987222
  implements MigrationInterface {
  name = 'addPhoneAndUniqUsernameInAccountEntity1599229987222';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `accounts` ADD `phone` varchar(255) NULL',
    );
    await queryRunner.query(
      'ALTER TABLE `accounts` ADD UNIQUE INDEX `IDX_477e3187cedfb5a3ac121e899c` (`username`)',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `accounts` DROP INDEX `IDX_477e3187cedfb5a3ac121e899c`',
    );
    await queryRunner.query('ALTER TABLE `accounts` DROP COLUMN `phone`');
  }
}
