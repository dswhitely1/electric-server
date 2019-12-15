const payrollRouter = require('express').Router();
const Payroll = require('../../../../data/models/payroll.model');
const validate = require('./payroll.middleware');

async function getAllPayroll(req, res) {
  try {
    const payroll = await Payroll.find();
    res.json(payroll);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getPayrollById(req, res) {
  const { id } = req.params;
  try {
    const [payroll] = await Payroll.findBy({ id });
    res.json(payroll);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function addPayroll(req, res) {
  try {
    const [payroll] = await Payroll.add(req.body);
    res.status(201).json(payroll);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function updatePayroll(req, res) {
  const { id } = req.params;
  try {
    const [payroll] = await Payroll.updatePayroll(id, req.body);
    res.json(payroll);
  } catch (error) {
    res.status(500).json(error);
  }
}

payrollRouter
  .get('/', getAllPayroll)
  .get('/:id', validate.notFound, getPayrollById)
  .post('/', validate.found, addPayroll)
  .put('/:id', validate.notFound, updatePayroll);

module.exports = payrollRouter;
