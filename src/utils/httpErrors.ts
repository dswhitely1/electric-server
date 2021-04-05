export abstract class HTTPClientError extends Error {
  readonly statusCode!: number;
  readonly name!: string;

  protected constructor(message: string | Record<string, any>) {
    super(JSON.stringify(message));
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class HTTP400Error extends HTTPClientError {
  readonly statusCode = 400;

  constructor(message: Record<string, any> | string = 'Bad Request') {
    super(message);
  }
}

export class HTTP401Error extends HTTPClientError {
  readonly statusCode = 401;

  constructor(message: Record<string, any> | string = 'Unauthorized') {
    super(message);
  }
}

export class HTTP403Error extends HTTPClientError {
  readonly statusCode = 403;

  constructor(message: Record<string, any> | string = 'Forbidden') {
    super(message);
  }
}

export class HTTP404Error extends HTTPClientError {
  readonly statusCode = 404;

  constructor(message: Record<string, any> | string = 'Not Found') {
    super(message);
  }
}
