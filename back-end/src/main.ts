import { ValidationPipe, ValidationError, BadRequestException } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { InternalServerExceptionFilter } from './filters/internal-server-exception.filter';
import { PageNotFoundExceptionFilter } from './filters/page-not-found-exception.filter';
import { UnauthorizedExceptionFilter } from './filters/unauthorized-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => new BadRequestException(errors),
    }),
  );
  app.useGlobalFilters(
    new InternalServerExceptionFilter(),
    new UnauthorizedExceptionFilter(),
    new PageNotFoundExceptionFilter(),
  );
  app.useGlobalGuards();
  app.useGlobalInterceptors();
  await app.listen(3000);
}
bootstrap();
