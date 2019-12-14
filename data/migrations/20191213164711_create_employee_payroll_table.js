exports.up = function(knex) {
  return knex.schema.createTable('employee_payroll', tbl => {
    tbl
      .integer('employee_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('employees')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('payroll_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('payroll')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('location_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('tax_location')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.float('grossWage').notNullable();
    tbl.float('netWage').notNullable();
    tbl.timestamps(true, true);
    tbl.primary(['employee_id', 'payroll_id', 'location_id']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('employee_payroll');
};
