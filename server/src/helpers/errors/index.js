const { JsonWebTokenError, TokenExpiredError } = require('jsonwebtoken');
const RequestError = require('./request-error');

const createBadDataError = (message) => new RequestError({ message, statusCode: 400 });
const createNotFoundError = (message) => new RequestError({ message, statusCode: 404 });
const createUnauthorizedError = (message) => new RequestError({ message, statusCode: 401 });
const createForbiddenError = (message) => new RequestError({ message, statusCode: 403 });

const sendErrorResponse = (error, res) => {
  let message;
  let status = 400;

  if (typeof error === 'string') {
    message = error;
  } else if (error instanceof RequestError) {
    message = error.message;
    status = error.statusCode;
  } else if (error instanceof JsonWebTokenError) {
    message = 'Authorization error. Invalid token data.';
    status = 401;
  } else if (error instanceof TokenExpiredError) {
    message = 'Authorization error. Token has expired';
    status = 401;
  } else if (error instanceof Error) {
    message = error.message;
  } else {
    message = 'Request handler error';
  }
  res.status(status).json({ message });
}

module.exports = {
  createBadDataError,
  createNotFoundError,
  sendErrorResponse,
  RequestError,
  createUnauthorizedError,
  createForbiddenError,
};
