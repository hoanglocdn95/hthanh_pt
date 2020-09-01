import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateScheduleEntity1598963212046 implements MigrationInterface {
  name = 'createScheduleEntity1598963212046';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `schedules` (`id` varchar(36) NOT NULL, `updated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleted` timestamp(6) NULL, `user_id` varchar(255) NOT NULL, `pt_id` varchar(255) NOT NULL, `dates` json NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `schedules` ADD CONSTRAINT `FK_55e6651198104efea0b04568a88` FOREIGN KEY (`user_id`) REFERENCES `accounts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
    await queryRunner.query(
      'ALTER TABLE `schedules` ADD CONSTRAINT `FK_9a2fe80ee6a8de250453303323a` FOREIGN KEY (`pt_id`) REFERENCES `accounts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `schedules` DROP FOREIGN KEY `FK_9a2fe80ee6a8de250453303323a`',
    );
    await queryRunner.query(
      'ALTER TABLE `schedules` DROP FOREIGN KEY `FK_55e6651198104efea0b04568a88`',
    );
    await queryRunner.query('DROP TABLE `schedules`');
  }
}
