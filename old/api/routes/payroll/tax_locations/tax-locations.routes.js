const taxLocationRouter = require('express').Router();
const TaxLocations = require('../../../../data/models/tax-location.model');
const validate = require('./taxMiddleware');

async function getAllLocations(req, res) {
  try {
    const locations = await TaxLocations.find();
    res.json(locations);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getLocationById(req, res) {
  try {
    const [location] = await TaxLocations.findBy({ id: req.params.id });
    res.json(location);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function addLocation(req, res) {
  try {
    const location = await TaxLocations.add(req.body);
    res.status(201).json(location[0]);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function updateLocation(req, res) {
  try {
    const location = await TaxLocations.updateLocation(req.params.id, req.body);
    res.json(location[0]);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteLocation(req, res) {
  try {
    const count = await TaxLocations.remove(req.params.id);
    res.json(count);
  } catch (error) {
    res.status(500).json(error);
  }
}

taxLocationRouter
  .get('/', getAllLocations)
  .get('/:id', validate.validateFound, getLocationById)
  .post('/', validate.validateInput, addLocation)
  .put('/:id', validate.validateFound, validate.validateInput, updateLocation)
  .delete('/:id', validate.validateFound, deleteLocation);

module.exports = taxLocationRouter;
