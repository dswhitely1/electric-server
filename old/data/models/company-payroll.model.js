const db = require('../dbConfig');

function find() {
  return db('company_payroll');
}

function findBy(filter) {
  return db('company_payroll').where(filter);
}

function add(newCompanyPayroll) {
  return db('company_paroll')
    .insert(newCompanyPayroll)
    .returning('*');
}

function updateCompanyPayroll(payrollId, taxTypeId, updatedInfo) {
  return db('company_payroll')
    .where({ payrollId, taxTypeId })
    .update(updatedInfo)
    .returning('*');
}

module.exports = { find, findBy, add, updateCompanyPayroll };
