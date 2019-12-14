const adminRoutes = require('./admin/admin.routes');
const messageRoutes = require('./message/message.routes');
const payrollRoutes = require('./payroll/payroll-index.routes');
const restricted = require('../utils/restricted');
const isAdmin = require('../utils/isAdmin');

module.exports = server => {
  server.use('/api/admin', restricted, isAdmin, adminRoutes);
  server.use('/api/messages', restricted, isAdmin, messageRoutes);
  payrollRoutes(server);
};
