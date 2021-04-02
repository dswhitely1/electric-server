exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tax_location')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tax_location').insert([
        { location: 'Indiana' },
        { location: 'Louisville Metro' },
      ]);
    });
};
