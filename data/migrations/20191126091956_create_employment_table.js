exports.up = function(knex) {
  return knex.schema.createTable('employment', tbl => {
    tbl.increments();
    tbl.string('companyName', 128).notNullable();
    tbl.string('cityState', 128).notNullable();
    tbl.string('phoneNumber', 128).notNullable();
    tbl.string('supervisor', 128).notNullable();
    tbl.date('startDate').notNullable();
    tbl.date('endDate');
    tbl.string('reasonForLeaving', 128).notNullable();
    tbl.boolean('contactYes').defaultTo(true);
    tbl.boolean('contactNo').defaultTo(false);
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
  return knex.schema.dropTableIfExists('employment');
};
