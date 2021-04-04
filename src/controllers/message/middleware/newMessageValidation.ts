import { ErrorValidation } from '../../../types';
import { isEmpty } from '../../../utils';
import Validator from 'validator';

interface INewMessageData {
  firstName: string;
  lastName: string;
  message: string;
  contact: string;
  subject: string;
  [key: string]: string;
}

export const newMessageValidation = (
  data: Partial<INewMessageData>,
): ErrorValidation<Partial<INewMessageData>> => {
  const errors: Partial<INewMessageData> = {};
  const fields = ['firstName', 'lastName', 'contact', 'message', 'subject'];
  fields.forEach((field) => {
    data[field] = !isEmpty(data[field]) ? data[field] : '';
    if (Validator.isEmpty(<string>data[field])) {
      errors[field] = `The field: '${field}' is required`;
    }
  });

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
