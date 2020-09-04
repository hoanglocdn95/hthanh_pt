import {
  Catch,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
  HttpStatus,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';

import { ErrorMessageConstant } from 'src/constants/error-message.constant';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    return response.status(HttpStatus.UNAUTHORIZED).json(ErrorMessageConstant.unauthorized);
  }
}
