exports.up = function(knex) {
  return knex.schema.createTable('tax_types', tbl => {
    tbl.increments();
    tbl
      .string('type', 128)
      .notNullable()
      .unique();
    tbl.text('description');
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tax_types');
};
