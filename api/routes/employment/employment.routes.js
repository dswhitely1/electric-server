const employmentRouter = require('express').Router();
const Employment = require('../../../data/models/employment.model');
const restricted = require('../../utils/restricted');
const employmentInputValidation = require('../../../data/validators/employment.validation');

function getEmploymentData(req, res) {
  Employment.findEmploymentBy({ userId: req.user.id })
    .then(employmentData => {
      res.json(employmentData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

function addEmploymentData(req, res) {
  const { errors, isValid } = employmentInputValidation(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const newEmploymentData = { ...req.body, userId: req.user.id };
  Employment.addEmployment(newEmploymentData)
    .then(employmentData => {
      res.status(201).json(employmentData);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function updateEmploymentData(req, res) {
  const { errors, isValid } = employmentInputValidation(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const updateData = { ...req.body, updated_at: new Date() };
  Employment.updateEmployment(req.params.id, updateData)
    .then(employmentData => {
      res.json(employmentData);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function deleteEmploymentData(req, res) {
  Employment.deleteEmployment(req.params.id, req.user.id)
    .then(employmentData => {
      res.json(employmentData);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

employmentRouter
  .get('/', restricted, getEmploymentData)
  .post('/', restricted, addEmploymentData)
  .put('/:id', restricted, updateEmploymentData)
  .delete('/:id', restricted, deleteEmploymentData);

module.exports = employmentRouter;
