const publicRoutes = require('./routes.public');
const privateRoutes = require('./routes.private');
const adminRoutes = require('./routes.admin');

module.exports = server => {
  publicRoutes(server);
  privateRoutes(server);
  adminRoutes(server);
};
