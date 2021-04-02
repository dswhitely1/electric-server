const db = require('../dbConfig');

function findEducationBy(filter) {
  return db('education').where(filter);
}

async function addEducation(newEducation) {
  await db('education').insert(newEducation);
  return findEducationBy({ userId: newEducation.userId });
}

async function updateEducation(id, updatedEducation) {
  await db('education')
    .where({ id })
    .update(updatedEducation);
  return findEducationBy({ userId: updatedEducation.userId });
}

async function deleteEducation(id, userId) {
  await db('education')
    .where({ id })
    .del();
  return findEducationBy({ userId });
}

module.exports = {
  findEducationBy,
  addEducation,
  updateEducation,
  deleteEducation,
};
