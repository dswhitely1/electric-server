const taxLocationRoutes = require('./tax_locations/tax-locations.routes');
const taxTypeRoutes = require('./tax-types/tax-types.routes');
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
};
