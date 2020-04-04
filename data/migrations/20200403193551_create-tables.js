
exports.up = function(knex) {
    return knex.schema.createTable('workers', tbl => {
      tbl.increments();
      tbl.string('workername', 128)
         .unique()
         .notNullable();
      tbl.string('email', 128)
         .unique();
      tbl.integer('phone', 10)
         .unique();
      tbl.string('password', 128)
         .notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('workers');
};
