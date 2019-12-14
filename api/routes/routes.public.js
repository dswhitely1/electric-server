const testRoute = require('./test/test.routes');
const authRoutes = require('./auth/auth.routes');

module.exports = server => {
  server.use('/', testRoute);
  server.use('/api/auth', authRoutes);
};
