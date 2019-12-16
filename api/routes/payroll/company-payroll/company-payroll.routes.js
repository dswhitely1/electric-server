const companyPayrollRouter = require('express').Router();
const CompanyPayroll = require('../../../../data/models/company-payroll.model');
const validate = require('./company-payroll.middleware');

async function getAllCompanyPayroll(req, res) {
  try {
    const companyPayroll = await CompanyPayroll.find();
    res.json(companyPayroll);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getCompanyPayrollById(req, res) {
  try {
    const { payrollId, taxTypeId } = req.params;
    const companyPayroll = await CompanyPayroll.findBy({
      payrollId,
      taxTypeId,
    });
    res.json(companyPayroll[0]);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function addCompanyPayroll(req, res) {
  try {
    const { payrollId, taxTypeId } = req.params;
    const [companyPayroll] = CompanyPayroll.add({
      payrollId,
      taxTypeId,
      ...req.body,
    });
    res.status(201).json(companyPayroll);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function updateCompanyPayroll(req, res) {
  try {
    const { payrollId, taxTypeId } = req.params;
    const [companyPayroll] = CompanyPayroll.updateCompanyPayroll(
      payrollId,
      taxTypeId,
      req.body
    );
    res.json(companyPayroll);
  } catch (error) {
    res.status(500).json(error);
  }
}

companyPayrollRouter
  .get('/', getAllCompanyPayroll)
  .get('/:payrollId/:taxTypeId', validate.notFound, getCompanyPayrollById)
  .post('/:payrollId/:taxTypeId', validate.found, addCompanyPayroll)
  .put('/:payrollId/:taxTypeId', validate.notFound, updateCompanyPayroll);

module.exports = companyPayrollRouter;
