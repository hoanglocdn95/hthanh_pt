import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAuthTokenEntity1599391641045 implements MigrationInterface {
  name = 'createAuthTokenEntity1599391641045';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `auth_tokens` (`id` varchar(36) NOT NULL, `updated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted` timestamp(6) NULL, `account_id` varchar(255) NOT NULL, `token` varchar(2000) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `auth_tokens` ADD CONSTRAINT `FK_83c837020f68fe7b748ef905f4b` FOREIGN KEY (`account_id`) REFERENCES `accounts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `auth_tokens` DROP FOREIGN KEY `FK_83c837020f68fe7b748ef905f4b`',
    );
    await queryRunner.query('DROP TABLE `auth_tokens`');
  }
}
