const educationRouter = require('express').Router();
const Education = require('../../../data/models/education.model');
const restricted = require('../../utils/restricted');

function getEducationData(req, res) {
  Education.findEducationBy({ userId: req.user.id })
    .then(educationData => {
      res.json(educationData);
    })
    .catch(err => res.status(500).json(err));
}

function addEducationData(req, res) {
  const newData = { ...req.body, userId: req.user.id };
  Education.addEducation(newData)
    .then(educationData => {
      res.status(201).json(educationData);
    })
    .catch(err => res.status(500).json(err));
}

function updateEducationData(req, res) {
  Education.updateEducation(req.params.id, req.body)
    .then(educationData => res.json(educationData))
    .catch(err => res.status(500).json(err));
}

function deleteEducationData(req, res) {
  Education.deleteEducation(req.params.id, req.user.id)
    .then(educationData => res.json(educationData))
    .catch(err => res.status(500).json(err));
}

educationRouter
  .get('/', restricted, getEducationData)
  .post('/', restricted, addEducationData)
  .put('/:id', restricted, updateEducationData)
  .delete('/:id', restricted, deleteEducationData);

module.exports = educationRouter;
