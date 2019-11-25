const db = require('../dbConfig');

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

module.exports = { findProfileBy, addProfile, updateProfile, deleteProfile };
