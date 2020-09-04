import {
  ExceptionFilter,
  Catch,
  HttpStatus,
  ExecutionContext,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

import { ErrorMessageConstant } from 'src/constants/error-message.constant';

@Catch()
export class InternalServerExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, context: ExecutionContext) {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse<Response>();

    if (typeof exception.getStatus === 'function') {
      const status = exception.getStatus();
      if (status === 400) {
        const extResponse: any = exception.getResponse();
        let messageResult = [];
        const errors = extResponse.message;
        const catchError = error => {
          messageResult.push({
            property: error.property,
            message: error.constraints,
          });
        };
        if (Array.isArray(errors)) {
          for (const error of errors) {
            if (error.children.length) {
              for (const child of error.children) {
                catchError(child);
              }
            } else {
              catchError(error);
            }
          }
        } else {
          messageResult = extResponse;
        }
        return response.status(status).json({
          errors: messageResult,
        });
      }
    }

    return response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      errors: ErrorMessageConstant.internalServer,
    });
  }
}
