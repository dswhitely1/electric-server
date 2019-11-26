const bcrypt = require('bcryptjs');

const password = bcrypt.hashSync('password', 10);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'donald', password, role: 'admin' },
        { username: 'employee', password, role: 'employee' },
        { username: 'user', password, role: 'user' },
      ]);
    });
};
