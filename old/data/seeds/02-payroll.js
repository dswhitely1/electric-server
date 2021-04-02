exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('payroll')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('payroll').insert([
        { payDate: new Date('October 14, 2019') },
        { payDate: new Date('October 11, 2019') },
        { payDate: new Date('October 18, 2019') },
        { payDate: new Date('October 25, 2019') },
      ]);
    });
};
