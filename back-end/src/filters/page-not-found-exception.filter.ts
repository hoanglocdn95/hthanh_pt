import {
  Catch,
  NotFoundException,
  ExceptionFilter,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';

import { Response } from 'express';
import { ErrorMessageConstant } from 'src/constants/error-message.constant';

@Catch(NotFoundException)
export class PageNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const http = host.switchToHttp();
    const res: Response = http.getResponse();

    res.status(HttpStatus.NOT_FOUND).json(ErrorMessageConstant.pageNotFound);
  }
}
