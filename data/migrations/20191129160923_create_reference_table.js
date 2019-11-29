exports.up = function(knex) {
  return knex.schema.createTable('references', tbl => {
    tbl.increments();
    tbl.string('name', 128).notNullable();
    tbl.string('relationship', 128).notNullable();
    tbl.string('years', 128).notNullable();
    tbl.string('phoneNumber', 128).notNullable();
    tbl
      .integer('userId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('references');
};
