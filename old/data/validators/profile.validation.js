const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = data => {
  const errors = {};

  const keyArr = [
    'firstName',
    'middleName',
    'lastName',
    'preferredName',
    'address',
    'address1',
    'city',
    'state',
    'zipCode',
    'phoneNumber',
    'altPhoneNumber',
    'email',
  ];

  const requiredKeyArr = keyArr.filter(
    key =>
      key !== 'middleName' &&
      key !== 'preferredName' &&
      key !== 'address1' &&
      key !== 'altPhoneNumber'
  );

  const nameArray = keyArr.filter(
    key =>
      key === 'firstName' ||
      key === 'middleName' ||
      key === 'lastName' ||
      key === 'preferredName'
  );

  keyArr.forEach(key => {
    data[key] = !isEmpty(data[key]) ? data[key] : '';
  });

  nameArray.forEach(key => {
    if (
      !Validator.isEmpty(data[key]) &&
      !Validator.isLength(data[key], { min: 2, max: 20 })
    ) {
      errors[key] = 'Must be between 2 and 20 characters';
    }
  });

  requiredKeyArr.forEach(key => {
    if (Validator.isEmpty(data[key])) {
      errors[key] = 'Required';
    }
  });

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
