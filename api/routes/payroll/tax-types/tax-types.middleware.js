const TaxTypes = require('../../../../data/models/tax-types.model');

async function found(req, res, next) {
  if (!req.body.type) {
    return res.status(400).json({ error: 'type is required' });
  }
  const { type } = req.body;
  const taxType = await TaxTypes.findBy({ type });
  if (taxType.length > 0) {
    return res.status(400).json({ error: `${type} is already in the system` });
  }
  next();
}

async function notFound(req, res, next) {
  const { id } = req.params;
  const taxType = await TaxTypes.findBy({ id });
  if (taxType.length === 0) {
    return res.status(404).json({ error: `${id} is not in the system` });
  }
  next();
}

module.exports = { found, notFound };
