const db = require('../dbConfig');

function find() {
  return db('tax_location');
}

function findBy(filter) {
  return db('tax_location').where(filter);
}

function add(newLocation) {
  return db('tax_location')
    .insert(newLocation)
    .returning('*');
}

function updateLocation(id, updatedLocation) {
  return db('tax_location')
    .where({ id })
    .update(updatedLocation)
    .returning('*');
}

function remove(id) {
  return db('tax_location')
    .where({ id })
    .del();
}

module.exports = { find, findBy, add, updateLocation, remove };
