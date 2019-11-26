exports.up = function(knex) {
  return knex.schema.createTable('profiles', profile => {
    profile.increments();
    profile.string('firstName', 128).notNullable();
    profile.string('middleName', 128);
    profile.string('lastName', 128).notNullable();
    profile.string('preferredName', 128);
    profile.string('address', 128).notNullable();
    profile.string('address1', 128);
    profile.string('city', 128).notNullable();
    profile.string('state', 128).notNullable();
    profile.string('zipCode', 128).notNullable();
    profile.string('phoneNumber', 128).notNullable();
    profile.string('altPhoneNumber', 128);
    profile.string('email', 128).notNullable();
    profile.boolean('fullTime').defaultTo(false);
    profile.boolean('partTime').defaultTo(false);
    profile.boolean('temporary').defaultTo(false);
    profile.boolean('weekdays').defaultTo(false);
    profile.boolean('weekends').defaultTo(false);
    profile.boolean('evenings').defaultTo(false);
    profile.boolean('nights').defaultTo(false);
    profile.string('referredBy', 128);
    profile.string('desiredPay', 128).notNullable();
    profile.string('position', 128).notNullable();
    profile.date('startDate').notNullable();
    profile.boolean('authYes').defaultTo(true);
    profile.boolean('authNo').defaultTo(false);
    profile.boolean('under18Yes').defaultTo(false);
    profile.boolean('under18No').defaultTo(true);
    profile.boolean('permitYes').defaultTo(false);
    profile.boolean('permitNo').defaultTo(false);
    profile.boolean('permitNA').defaultTo(true);
    profile
      .integer('userId')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    profile.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('profiles');
};
