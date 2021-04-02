const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = data => {
  const errors = {};

  // data.firstName = !isEmpty(data.firstName) ? data.firstName : '';
  // data.lastName = !isEmpty(data.lastName) ? data.lastName : '';
  // data.email = !isEmpty(data.email) ? data.email : '';
  data.username = !isEmpty(data.username) ? data.username : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : '';

  // if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
  //   errors.firstName = 'First name must be between 2 and 30 characters';
  // }
  // if (Validator.isEmpty(data.firstName)) {
  //   errors.firstName = 'Required';
  // }
  // if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
  //   errors.lastName = 'Last name must be between 2 and 30 characters';
  // }
  // if (Validator.isEmpty(data.lastName)) {
  //   errors.lastName = 'Required';
  // }
  // if (!Validator.isEmail(data.email)) {
  //   errors.email = '*Invalid Email Address';
  // }
  // if (Validator.isEmpty(data.email)) {
  //   errors.email = '*Required';
  // }
  if (!Validator.isLength(data.username, { min: 5, max: 20 })) {
    errors.username = 'Username must be between 5 and 20 characters';
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = '*Required';
  }
  if (!Validator.isLength(data.password, { min: 5, max: 20 })) {
    errors.password = 'Password must be between 5 and 20 characters';
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = '*Required';
  }
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords Must Match.';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
