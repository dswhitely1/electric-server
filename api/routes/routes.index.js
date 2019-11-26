const testRoute = require('./test/test.routes');
const authRoutes = require('./auth/auth.routes');
const profileRoutes = require('./profile/profile.routes');

module.exports = server => {
  server.use('/', testRoute);
  server.use('/api/auth', authRoutes);
  server.use('/api/profiles', profileRoutes);
};
