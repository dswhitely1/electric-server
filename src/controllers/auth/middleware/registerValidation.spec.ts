import { registerValidation } from './registerValidation';

const goodPayload = {
  username: 'myUsername',
  password: 'myPassword',
  confirmPassword: 'myPassword',
};

const noPayload = {};

const misMatchedPasswords = {
  ...goodPayload,
  confirmPassword: 'myPassword2',
};

const usernameError = {
  ...goodPayload,
  username: 'four',
};

describe('registerValidation.ts', () => {
  it('should return success when the request body is good', () => {
    const expected = { errors: {}, isValid: true };
    const actual = registerValidation(goodPayload);
    expect(actual).toHaveProperty('isValid');
    expect(actual).toStrictEqual(expected);
  });
  it('should return failure when there is no request', () => {
    const expected = {
      errors: {
        username: 'Username is required',
        password: 'Password is required',
      },
      isValid: false,
    };
    const actual = registerValidation(noPayload);
    expect(actual.isValid).toBe(false);
    expect(actual).toStrictEqual(expected);
  });
  it('should return passwords do not match', () => {
    const expected = {
      errors: {
        password: 'Passwords must match',
      },
      isValid: false,
    };
    const actual = registerValidation(misMatchedPasswords);
    expect(actual.isValid).toBe(false);
    expect(actual).toStrictEqual(expected);
  });
  it('should return username must be 5 to 20 characters', () => {
    const expected = {
      errors: {
        username: 'Username must be between 5 and 20 characters',
      },
      isValid: false,
    };
    const actual = registerValidation(usernameError);
    expect(actual.isValid).toBe(false);
    expect(actual).toStrictEqual(expected);
  });
});
