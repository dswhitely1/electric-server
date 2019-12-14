const testRoute = require('./test/test.routes');
const authRoutes = require('./auth/auth.routes');
const profileRoutes = require('./profile/profile.routes');
const employmentRoutes = require('./employment/employment.routes');
const educationRoutes = require('./education/education.router');
const referenceRoutes = require('./references/reference.route');
const adminRoutes = require('./admin/admin.routes');
const messageRoutes = require('./message/message.routes');
const taxLocationRoutes = require('./payroll/tax_locations/tax-locations.routes');
const taxTypeRoutes = require('./payroll/tax-types/tax-types.routes');

module.exports = server => {
  server.use('/', testRoute);
  server.use('/api/auth', authRoutes);
  server.use('/api/profiles', profileRoutes);
  server.use('/api/employment', employmentRoutes);
  server.use('/api/education', educationRoutes);
  server.use('/api/references', referenceRoutes);
  server.use('/api/admin', adminRoutes);
  server.use('/api/messages', messageRoutes);
  server.use('/api/payroll/tax-locations', taxLocationRoutes);
  server.use('/api/payroll/tax-types', taxTypeRoutes);
};
