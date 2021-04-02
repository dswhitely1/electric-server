exports.up = function(knex) {
  return knex.schema.createTable('tax_location', tbl => {
    tbl.increments();
    tbl
      .string('location', 128)
      .notNullable()
      .unique();
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tax_location');
};
