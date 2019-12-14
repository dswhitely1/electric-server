const profileRoutes = require('./profile/profile.routes');
const employmentRoutes = require('./employment/employment.routes');
const educationRoutes = require('./education/education.router');
const referenceRoutes = require('./references/reference.route');
const restricted = require('../utils/restricted');

module.exports = server => {
  server.use('/api/profiles', restricted, profileRoutes);
  server.use('/api/employment', restricted, employmentRoutes);
  server.use('/api/education', restricted, educationRoutes);
  server.use('/api/references', restricted, referenceRoutes);
};
