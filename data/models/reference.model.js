const db = require('../dbConfig');

function findReferenceBy(filter) {
  return db('references').where(filter);
}

async function addReference(newReference) {
  await db('references').insert(newReference);
  return findReferenceBy({ userId: newReference.userId });
}

async function updateReference(id, updatedReference) {
  await db('references')
    .where({ id })
    .update(updatedReference);
  return findReferenceBy({ userId: updatedReference.userId });
}

async function deleteReference(id, userId) {
  await db('references')
    .where({ id })
    .del();
  return findReferenceBy({ userId });
}

module.exports = {
  findReferenceBy,
  addReference,
  updateReference,
  deleteReference,
};
