# HTTP Status Errors

Throw HTTP error status codes as `Error`s!


## Installation

    $ npm install --save http-status-errors

## Usage

Import the errors you want to use, or all of them.

```js
import {NotFoundError} from 'http-status-errors';
// or...
import * as errors from 'http-status-errors';
```

Or if you're stuck with old-fashioned JS:

```js
var NotFoundError = require('http-status-errors').NotFoundError;
// or...
var errors = require('http-status-errors')
```

Once you've imported the package, just throw as normal.  All constructors accept a message as the only argument, otherwise they'll use the default message for that error.  All errors also have a `code` field which is the corresponding HTTP status code as an integer.

E.g.:

```js
throw new NotFoundError('widget not found');
```

## Errors

Below is the list of error names, status codes and default messages that this package supports.

| Code | Class name | Default message |
|---|---|---|
| 400 | `BadRequestError` | There is a problem with the submitted request. |
| 401 | `NotAuthenticatedError` | You are not authenticated.  Please authenticate and try again. |
| 402 | `PaymentRequiredError` | The action you are trying to perform requires payment. |
| 403 | `ForbiddenError` | You are forbidden from accessing the requested resource. |
| 404 | `NotFoundError` | The requested resource was not found. |
| 405 | `MethodNotAllowedError` | The resource does not support the requested method. |
| 409 | `ConflictError` | There is a conflict with the requested resource. |
| 418 | `TeapotError` | I'm a teapot... |
| 451 | `UnavailableError` | The requested resource is unavailable for legal reasons. |
| 500 | `InternalServerError` | The server has encountered an error. |
| 501 | `NotImplementedError` | The action you are trying to perform is not implemented. |
| 503 | `ServiceUnavailableError` | The service is currently unavailable. |
