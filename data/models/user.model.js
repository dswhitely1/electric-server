const db = require('../dbConfig');

async function findAllUsers() {
  const users = await db('users').returning([
    'id',
    'username',
    'role',
    'created_at',
    'updated_at',
  ]);
  // eslint-disable-next-line camelcase
  return users.map(({ id, username, role, created_at, updated_at }) => ({
    id,
    username,
    role,
    created_at,
    updated_at,
  }));
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
