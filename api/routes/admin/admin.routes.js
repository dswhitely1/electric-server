const adminRouter = require('express').Router();
const restricted = require('../../utils/restricted');
const isAdmin = require('../../utils/isAdmin');
const Users = require('../../../data/models/user.model');
const Profiles = require('../../../data/models/profile.model');
const Employment = require('../../../data/models/employment.model');
const Education = require('../../../data/models/education.model');
const References = require('../../../data/models/reference.model');

function checkAdmin(req, res) {
  return res.status(200).json({ isAdmin: true });
}

async function getUserProfile(req, res) {
  try {
    const userProfile = await Profiles.findProfileBy({ userId: req.params.id });
    const profile = userProfile[0];
    const employment = await Employment.findEmploymentBy({
      userId: req.params.id,
    });
    const education = await Education.findEducationBy({
      userId: req.params.id,
    });
    const reference = await References.findReferenceBy({
      userId: req.params.id,
    });
    res.json({ profile, employment, education, reference });
  } catch (err) {
    res.status(500).json(err);
  }
}

function getUsers(req, res) {
  Users.findAllUsers()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

adminRouter
  .get('/', restricted, isAdmin, checkAdmin)
  .get('/users/profile/:id', restricted, isAdmin, getUserProfile)
  .get('/users', restricted, isAdmin, getUsers);

module.exports = adminRouter;
