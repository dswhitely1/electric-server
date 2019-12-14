exports.up = function(knex) {
  return knex.schema.createTable('employees', tbl => {
    tbl.increments();
    tbl.string('firstName', 128).notNullable();
    tbl.string('lastName', 128).notNullable();
    tbl.boolean('exempt').defaultTo(false);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('employees');
};
