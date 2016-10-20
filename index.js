
([
  {name: 'BadRequestError', message: 'There is a problem with the submitted request.', status: 400},
  {name: 'NotAuthenticatedError', message: 'You are not authenticated.  Please authenticate and try again.', status: 401},
  {name: 'PaymentRequiredError', message: 'The action you are trying to perform requires payment.', status: 402},
  {name: 'ForbiddenError', message: 'You are forbidden from accessing the requested resource.', status: 403},
  {name: 'NotFoundError', message: 'The requested resource was not found.', status: 404},
  {name: 'MethodNotAllowedError', message: 'The resource does not support the requested method.', status: 405},
  {name: 'NotAcceptableError', message: 'The resource cannot be formatted according to the requested type in the Accept header.', status: 406},
  {name: 'ConflictError', message: 'There is a conflict with the requested resource.', status: 409},
  {name: 'TeapotError', message: 'I\'m a teapot...', status: 418},
  {name: 'UnavailableError', message: 'The requested resource is unavailable for legal reasons.', status: 451},
  {name: 'InternalServerError', message: 'The server has encountered an error.', status: 500},
  {name: 'NotImplementedError', message: 'The action you are trying to perform is not implemented.', status: 501},
  {name: 'ServiceUnavailableError', message: 'The service is currently unavailable.', status: 503}
])
.forEach(function (options) {
  function HttpStatusError(message, meta) {
    Error.captureStackTrace(this, this.constructor);
    this.name = options.name;
    this.message = message || options.message;
    this.status = options.status;
    this.meta = meta;
  }

  util.inherits(HttpStatusError, Error);
  module.exports[options.name] = HttpStatusError;
});
