const taxLocationRoutes = require('./tax_locations/tax-locations.routes');
const taxTypeRoutes = require('./tax-types/tax-types.routes');
const payrollRoutes = require('./payroll/payroll.routes');
const companyPayrollRoutes = require('./company-payroll/company-payroll.routes');
const employeePayrollRoutes = require('./employee-payroll/employee-payroll.routes');
const restricted = require('../../utils/restricted');
const isAdmin = require('../../utils/isAdmin');

module.exports = server => {
  server.use(
    '/api/payroll/tax-locations',
    restricted,
    isAdmin,
    taxLocationRoutes
  );
  server.use('/api/payroll/tax-types', restricted, isAdmin, taxTypeRoutes);
  server.use('/api/payroll/payroll', restricted, isAdmin, payrollRoutes);
  server.use(
    '/api/payroll/company-payroll',
    restricted,
    isAdmin,
    companyPayrollRoutes
  );
  server.use(
    '/api/payroll/employee-payroll',
    restricted,
    isAdmin,
    employeePayrollRoutes
  );
};
