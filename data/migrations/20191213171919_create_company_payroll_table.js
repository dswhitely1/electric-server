exports.up = function(knex) {
  return knex.schema.createTable('company_payroll', tbl => {
    tbl.increments();
    tbl
      .integer('payroll_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('payroll')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('taxType_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('tax_types')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.float('amount');
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('company_payroll');
};
