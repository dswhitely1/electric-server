const db = require('../dbConfig');

function find() {
  return db('employee_payroll');
}

function findBy(filter) {
  return db('employee_payroll').where(filter);
}

function add(newEmployeePayroll) {
  return db('employee_payroll')
    .insert(newEmployeePayroll)
    .returning('*');
}

function update(employeeId, payrollId, locationId, updatedPayroll) {
  return db('employee_payroll')
    .where({ employeeId, payrollId, locationId })
    .update(updatedPayroll)
    .returning('*');
}

module.exports = { find, findBy, add, update };
