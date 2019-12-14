exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employees')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('employees').insert([
        { firstName: 'Josh', lastName: 'Bisinger' },
        { firstName: 'Secily', lastName: 'Bond' },
        { firstName: 'J. Nick', lastName: 'Bradshaw' },
        { firstName: 'Kory', lastName: 'Kallembach' },
        { firstName: 'Edward', lastName: 'Newton' },
        { firstName: 'Josh', lastName: 'Newton' },
        { firstName: 'Marie', lastName: 'Pavone' },
        { firstName: 'Jeremy', lastName: 'Steveson', exempt: true },
        { firstName: 'Samantha', lastName: 'Steveson', exempt: true },
        { firstName: 'Sarah', lastName: 'Whitely' },
      ]);
    });
};
