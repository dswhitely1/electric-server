const bcrypt = require('bcryptjs');

const donPassword = bcrypt.hashSync('Amw040915!', 10);
const samPassword = bcrypt.hashSync('42sense42', 10);

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'dswhitely1', password: donPassword, role: 'admin' },
        { username: 'ssteveson', password: samPassword, role: 'admin' },
      ]);
    });
};
