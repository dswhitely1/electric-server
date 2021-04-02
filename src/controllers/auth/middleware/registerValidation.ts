import Validator from 'validator';
import { isEmpty } from '../../../utils';
import { ErrorValidation } from '../../../types';

interface IRegisterData {
  username: string;
  password: string;
  confirmPassword: string;
}

export const registerValidation = (
  data: Partial<IRegisterData>,
): ErrorValidation<Partial<IRegisterData>> => {
  const errors: Partial<IRegisterData> = {};
  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : '';
  if (!Validator.isLength(<string>data.username, { min: 5, max: 20 })) {
    errors.username = 'Username must be between 5 and 20 characters';
  }
  if (Validator.isEmpty(<string>data.username)) {
    errors.username = 'Username is required';
  }
  if (!Validator.isLength(<string>data.password, { min: 5, max: 20 })) {
    errors.password = 'Password must be between 5 and 20 characters';
  }
  if (Validator.isEmpty(<string>data.password)) {
    errors.password = 'Password is required';
  }
  if (data.password !== data.confirmPassword) {
    errors.password = 'Passwords must match';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
