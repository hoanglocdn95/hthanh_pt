require('dotenv').config();

const DBConfig = {
  dev: {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DEV_NAME,
    synchronize: false,
    logging: true,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/database/migrations/*.js'],
    cli: { migrationsDir: 'src/database/migrations' }
  },
}

module.exports = DBConfig[process.env.NODE_ENV];
