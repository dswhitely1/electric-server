const db = require('../dbConfig');

function find() {
  return db('payroll');
}

function findBy(filter) {
  return db('payroll').where(filter);
}

function add(newPayroll) {
  return db('payroll')
    .insert(newPayroll)
    .returning('*');
}

function updatePayroll(id, updatedPayroll) {
  return db('payroll')
    .where({ id })
    .update(updatedPayroll)
    .returning('*');
}

module.exports = { find, findBy, add, updatePayroll };
