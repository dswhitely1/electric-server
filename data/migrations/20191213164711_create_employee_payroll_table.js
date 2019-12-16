exports.up = function(knex) {
  return knex.schema.createTable('employee_payroll', tbl => {
    tbl
      .integer('employeeId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('employees')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('payrollId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('payroll')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('locationId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('tax_location')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl.float('grossWage').notNullable();
    tbl.float('netWage').notNullable();
    tbl.timestamps(true, true);
    tbl.primary(['employeeId', 'payrollId', 'locationId']);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('employee_payroll');
};
