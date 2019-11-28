const testRoute = require('./test/test.routes');
const authRoutes = require('./auth/auth.routes');
const profileRoutes = require('./profile/profile.routes');
const employmentRoutes = require('./employment/employment.routes');

module.exports = server => {
  server.use('/', testRoute);
  server.use('/api/auth', authRoutes);
  server.use('/api/profiles', profileRoutes);
  server.use('/api/employment', employmentRoutes);
};
