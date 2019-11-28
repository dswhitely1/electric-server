const db = require('../dbConfig');

function findEmploymentBy(filter) {
  return db('employment').where(filter);
}

async function addEmployment(newEmployment) {
  await db('employment').insert(newEmployment);
  return findEmploymentBy({ userId: newEmployment.userId });
}

async function updateEmployment(id, updatedEmployment) {
  await db('employment')
    .where({ id })
    .update(updatedEmployment);
  return findEmploymentBy({ userId: updatedEmployment.userId });
}

async function deleteEmployment(id, userId) {
  await db('employment')
    .where({ id })
    .del();
  return findEmploymentBy({ userId });
}

module.exports = {
  findEmploymentBy,
  addEmployment,
  updateEmployment,
  deleteEmployment,
};
