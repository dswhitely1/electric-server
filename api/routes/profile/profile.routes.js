const profileRouter = require('express').Router();
const Profiles = require('../../../data/models/profile.model');
const restricted = require('../../utils/restricted');
const profileInputValidation = require('../../../data/validators/profile.validation');

function getProfile(req, res) {
  Profiles.findProfileBy({ userId: req.user.id })
    .then(profile => res.json(profile[0]))
    .catch(err => res.status(500).json(err));
}

function addProfile(req, res) {
  const { errors, isValid } = profileInputValidation(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Profiles.addProfile({ ...req.body, userId: req.user.id })
    .then(newProfile => res.status(201).json(newProfile[0]))
    .catch(err => res.status(500).json(err));
}

function updateProfile(req, res) {
  const updateData = { ...req.body, updated_at: new Date() };
  Profiles.updateProfile(req.params.id, updateData)
    .then(updatedProfile => res.json(updatedProfile[0]))
    .catch(err => res.status(500).json(err));
}

function deleteProfile(req, res) {
  Profiles.deleteProfile(req.params.id)
    .then(() => res.status(204))
    .catch(err => res.status(500).json(err));
}

profileRouter
  .get('/', restricted, getProfile)
  .post('/', restricted, addProfile)
  .put('/:id', restricted, updateProfile)
  .delete('/:id', restricted, deleteProfile);

module.exports = profileRouter;
