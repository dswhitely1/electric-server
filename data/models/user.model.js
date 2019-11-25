const db = require('../dbConfig');

function findAllUsers() {
  return db('users');
}

function findUserBy(filter) {
  return db('users').where(filter);
}

function addUser(user) {
  return db('users')
    .insert(user)
    .returning('*');
}

function updateUser(id, updatedUser) {
  return db('users')
    .where({ id })
    .update(updatedUser)
    .returning('*');
}

function deleteUser(id) {
  return db('users')
    .where({ id })
    .del();
}

module.exports = { findAllUsers, findUserBy, addUser, updateUser, deleteUser };
