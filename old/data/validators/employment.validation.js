const isEmpty = require('./isEmpty');

module.exports = data => {
  const errors = {};

  data.startDate = !isEmpty(data.startDate) ? data.startDate : '';
  data.endDate = !isEmpty(data.endDate) ? data.endDate : '';

  const startDateValue =
    data.startDate.trim().length > 0 ? new Date(data.startDate) : null;
  const endDateValue =
    data.endDate.trim().length > 0 ? new Date(data.endDate) : null;

  if (startDateValue && endDateValue && endDateValue - startDateValue < 0) {
    errors.startDate = 'Start Date cannot be later than the End Date.';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
