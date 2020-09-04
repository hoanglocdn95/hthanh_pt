export const ErrorMessageConstant = {
  internalServer: 'INTERNAL_SERVER_ERROR',
  pageNotFound: 'page not found',
  loginIncorrect: 'email or password is invalid',
  unauthorized: 'unauthorized',
};

export const ErrorLevelConstant = {
  High: ['isNotEmpty'],
  Medium: ['isString', 'isInt'],
};
