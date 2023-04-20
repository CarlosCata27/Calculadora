class CustomError extends Error {
    constructor(message, status) {
      super(message);
      this.name = this.constructor.name;
      this.status = status || 500;
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  class BadRequestError extends CustomError {
    constructor(message) {
      super(message || 'Bad Request', 400);
    }
  }
  
  class UnauthorizedError extends CustomError {
    constructor(message) {
      super(message || 'Unauthorized', 401);
    }
  }
  
  class ForbiddenError extends CustomError {
    constructor(message) {
      super(message || 'Forbidden', 403);
    }
  }
  
  class NotFoundError extends CustomError {
    constructor(message) {
      super(message || 'Not Found', 404);
    }
  }
  
  module.exports = {
    CustomError,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
  };
  