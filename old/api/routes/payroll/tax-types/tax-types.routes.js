const taxTypesRouter = require('express').Router();
const TaxTypes = require('../../../../data/models/tax-types.model');
const validate = require('./tax-types.middleware');

async function allTaxTypes(req, res) {
  try {
    const taxTypes = await TaxTypes.find();
    res.json(taxTypes);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getTaxTypeById(req, res) {
  try {
    const { id } = req.params;
    const taxType = await TaxTypes.findBy({ id });
    res.json(taxType);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function addTaxType(req, res) {
  try {
    const [taxType] = await TaxTypes.add(req.body);
    res.status(201).json(taxType);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function updateTaxType(req, res) {
  try {
    const { id } = req.params;
    const [taxType] = await TaxTypes.updateType(id, req.body);
    res.json(taxType);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteTaxType(req, res) {
  try {
    const { id } = req.params;
    const count = await TaxTypes.remove(id);
    res.json(count);
  } catch (error) {
    res.status(500).json(error);
  }
}

taxTypesRouter
  .get('/', allTaxTypes)
  .get('/:id', validate.notFound, getTaxTypeById)
  .post('/', validate.found, addTaxType)
  .put('/:id', validate.notFound, updateTaxType)
  .delete('/:id', validate.notFound, deleteTaxType);

module.exports = taxTypesRouter;
