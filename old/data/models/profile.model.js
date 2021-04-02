const db = require('../dbConfig');

function findProfiles() {
  return db('profiles');
}

function findProfileBy(filter) {
  return db('profiles').where(filter);
}

function addProfile(newProfile) {
  return db('profiles')
    .insert(newProfile)
    .returning('*');
}

function updateProfile(id, updatedProfile) {
  return db('profiles')
    .where({ id })
    .update(updatedProfile)
    .returning('*');
}

function deleteProfile(id) {
  return db('profiles')
    .where({ id })
    .del();
}

module.exports = {
  findProfiles,
  findProfileBy,
  addProfile,
  updateProfile,
  deleteProfile,
};
