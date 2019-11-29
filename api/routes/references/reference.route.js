const referenceRouter = require('express').Router();
const References = require('../../../data/models/reference.model');
const restricted = require('../../utils/restricted');

function getReferenceData(req, res) {
  References.findReferenceBy({ userId: req.user.id })
    .then(referenceData => {
      res.json(referenceData);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function addReferenceData(req, res) {
  const newData = { ...req.body, userId: req.user.id };
  References.addReference(newData)
    .then(referenceData => {
      res.status(201).json(referenceData);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function updateReferenceData(req, res) {
  const updatedData = { ...req.body, updated_at: new Date() };
  References.updateReference(req.params.id, updatedData)
    .then(referenceData => {
      res.json(referenceData);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function deleteReference(req, res) {
  References.deleteReference(req.params.id, req.user.id)
    .then(referenceData => {
      res.json(referenceData);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

referenceRouter
  .get('/', restricted, getReferenceData)
  .post('/', restricted, addReferenceData)
  .put('/:id', restricted, updateReferenceData)
  .delete('/:id', restricted, deleteReference);

module.exports = referenceRouter;
