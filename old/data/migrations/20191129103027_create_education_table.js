exports.up = function(knex) {
  return knex.schema.createTable('education', tbl => {
    tbl.increments();
    tbl.string('schoolName', 128).notNullable();
    tbl.string('subject', 128).notNullable();
    tbl.string('graduate', 129).notNullable();
    tbl.string('received', 128).notNullable();
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
  return knex.schema.dropTableIfExists('education');
};
