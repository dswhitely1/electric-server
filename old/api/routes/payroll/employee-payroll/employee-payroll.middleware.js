const EmployeePayroll = require('../../../../data/models/employee-payroll.model');

async function found(req, res, next) {
  if (!req.body.grossWage || !req.body.netWage) {
    return res.status(400).json({ error: 'Gross and/or Net wage is required' });
  }
  const data = await EmployeePayroll.findBy({ ...req.params });
  if (data.length > 0) {
    return res.status(400).json({ error: 'This combination already exists' });
  }
  next();
}

async function notFound(req, res, next) {
  const data = await EmployeePayroll.findBy({ ...req.params });
  if (data.length === 0) {
    return res.status(404).json({ error: 'This combination does not exist' });
  }
  next();
}

module.exports = { found, notFound };
