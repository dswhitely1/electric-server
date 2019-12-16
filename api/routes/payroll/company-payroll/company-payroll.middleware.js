const CompanyPayroll = require('../../../../data/models/company-payroll.model');

async function found(req, res, next) {
  if (!req.body.amount) {
    return res.status(400).json({ error: 'Amount is required' });
  }
  const { payrollId, taxTypeId } = req.params;
  const companyPayroll = await CompanyPayroll.findBy({ payrollId, taxTypeId });
  if (companyPayroll.length > 0) {
    return res.status(400).json({ error: 'This combination already exists' });
  }
  next();
}

async function notFound(req, res, next) {
  const { payrollId, taxTypeId } = req.params;
  const companyPayroll = await CompanyPayroll.findBy({ payrollId, taxTypeId });
  if (companyPayroll.length === 0) {
    return res.status(404).json({ error: 'This combination is not found' });
  }
  next();
}

module.exports = { found, notFound };
