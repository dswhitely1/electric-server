exports.up = function(knex) {
  return knex.schema.createTable('payroll', tbl => {
    tbl.increments();
    tbl.date('payDate').defaultTo(knex.fn.now());
    tbl.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('payroll');
};
