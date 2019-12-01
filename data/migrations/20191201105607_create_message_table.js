exports.up = function(knex) {
  return knex.schema.createTable('messages', tbl => {
    tbl.increments();
    tbl.string('firstName', 128).notNullable();
    tbl.string('lastName', 128).notNullable();
    tbl.string('contact', 128).notNullable();
    tbl.string('subject', 128).notNullable();
    tbl.string('message', 1000).notNullable();
    tbl.boolean('read').defaultTo(false);
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('messages');
};
