const taxTypesRouter = require('express').Router();
const TaxTypes = require('../../../../data/models/tax-types.model');

async function allTaxTypes(req, res) {
  try {
    const taxTypes = await TaxTypes.find();
    res.json(taxTypes);
  } catch (error) {
    res.status(500).json(error);
  }
}

taxTypesRouter.get('/', allTaxTypes);

module.exports = taxTypesRouter;
