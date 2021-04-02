exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tax_types')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('tax_types').insert([
        { type: 'FIT' },
        { type: 'SS' },
        { type: 'MEDICARE' },
        { type: 'SS ER MATCH' },
        { type: 'MEDICARE ER MATCH' },
        { type: 'FUTA' },
        { type: 'IN SIT' },
        { type: 'IN SUT' },
        { type: 'HARRISON CO' },
        { type: 'FLOYD CO' },
        { type: 'CLARK CO' },
        { type: 'KY SIT' },
        { type: 'KY SUT' },
        { type: 'LM RES' },
        { type: 'LM NON RES' },
        { type: 'SHIVELY' },
        { type: 'J-TOWN' },
        { type: 'FL SUT' },
      ]);
    });
};
