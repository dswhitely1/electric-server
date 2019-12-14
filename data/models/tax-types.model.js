const db = require('../dbConfig');

function find() {
  return db('tax_types');
}

function findBy(filter) {
  return db('tax_types').where(filter);
}

function add(newType) {
  return db('tax_types')
    .insert(newType)
    .returning('*');
}

function updateType(id, updatedType) {
  return db('tax_types')
    .where({ id })
    .update(updatedType)
    .returning('*');
}

function remove(id) {
  return db('tax_types')
    .where({ id })
    .del();
}

module.exports = { find, findBy, add, updateType, remove };
