const employeePayrollRouter = require('express').Router();
const EmployeePayroll = require('../../../../data/models/employee-payroll.model');
const validate = require('./employee-payroll.middleware');

async function getAllData(req, res) {
  try {
    const data = await EmployeePayroll.find();
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function getData(req, res) {
  try {
    const data = await EmployeePayroll.findBy({ ...req.params });
    res.json(data[0]);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function addData(req, res) {
  try {
    const [data] = await EmployeePayroll.add({ ...req.params, ...req.body });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function updateData(req, res) {
  try {
    const { employeeId, payrollId, locationId } = req.params;
    const [data] = await EmployeePayroll.update(
      employeeId,
      payrollId,
      locationId,
      req.body
    );
    res.json(data);
  } catch (error) {
    res.status(500).json(error);
  }
}

employeePayrollRouter
  .get('/', getAllData)
  .get('/:employeeId/:payrollId/:locationId', validate.notFound, getData)
  .post('/:employeeId/:payrollId/:locationId', validate.found, addData)
  .put('/:employeeId/:payrollId/:locationId', validate.notFound, updateData);

module.exports = employeePayrollRouter;
