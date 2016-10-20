
declare class HttpStatusError extends Error {
  constructor(message?: string, meta?: any);
  status: number;
}

export declare class BadRequestError extends HttpStatusError { }
export declare class NotAuthenticatedError extends HttpStatusError { }
export declare class PaymentRequiredError extends HttpStatusError { }
export declare class ForbiddenError extends HttpStatusError { }
export declare class NotFoundError extends HttpStatusError { }
export declare class MethodNotAllowedError extends HttpStatusError { }
export declare class NotAcceptableError extends HttpStatusError { }
export declare class ConflictError extends HttpStatusError { }
export declare class TeapotError extends HttpStatusError { }
export declare class UnavailableError extends HttpStatusError { }
export declare class InternalServerError extends HttpStatusError { }
export declare class NotImplementedError extends HttpStatusError { }
export declare class ServiceUnavailableError extends HttpStatusError { }