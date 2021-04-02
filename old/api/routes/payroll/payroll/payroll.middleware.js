const Payroll = require('../../../../data/models/payroll.model');

async function found(req, res, next) {
  if (!req.body.payDate) {
    return res.status(400).json({ error: 'payDate is required' });
  }
  const { payDate } = req.body;
  const payDay = await Payroll.findBy({ payDate });
  if (payDay.length > 0) {
    return res
      .status(400)
      .json({ error: `${payDate} is already in the system` });
  }
  next();
}

async function notFound(req, res, next) {
  const { id } = req.params;
  const payDay = await Payroll.findBy({ id });
  if (payDay.length === 0) {
    return res.status(404).json({ error: `${id} is not in the system` });
  }
  next();
}

module.exports = { found, notFound };
