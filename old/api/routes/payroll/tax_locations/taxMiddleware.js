const TaxLocations = require('../../../../data/models/tax-location.model');

async function validateFound(req, res, next) {
  const location = await TaxLocations.findBy({ id: req.params.id });
  if (location.length === 0) {
    return res.status(404).json({ error: 'Not Found' });
  }
  next();
}

async function validateInput(req, res, next) {
  if (!req.body.location) {
    return res.status(400).json({ error: 'Location is required' });
  }
  const location = await TaxLocations.findBy({ location: req.body.location });
  if (location.length > 0) {
    return res
      .status(400)
      .json({ error: `${req.body.location} is already taken` });
  }
  next();
}

module.exports = { validateFound, validateInput };
