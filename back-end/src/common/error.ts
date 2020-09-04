import { includes } from 'lodash';

import { ErrorLevelConstant } from 'src/constants/error-message.constant';

export class ErrorCommon {
  static getErrorType(error: any) {
    const errorTypes = Object.keys(error.constraints);
    const highError = errorTypes.find(errType => includes(ErrorLevelConstant.High, errType));
    if (highError) {
      return highError;
    }

    const mediumError = errorTypes.find(errType => includes(ErrorLevelConstant.Medium, errType));
    if (mediumError) {
      return mediumError;
    }

    return errorTypes[0];
  }
}
