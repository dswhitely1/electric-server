exports.up = function(knex) {
  return knex.schema.createTable('company_payroll', tbl => {
    tbl
      .integer('payrollId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('payroll')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('taxTypeId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('tax_types')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.float('amount');
    tbl.timestamps(true, true);
    tbl.primary(['payrollId', 'taxTypeId']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('company_payroll');
};
