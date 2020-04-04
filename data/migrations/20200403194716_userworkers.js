
exports.up = function(knex) {
    return knex.schema.createTable('userworkers', tbl => {
        tbl.integer('userid')
           .unique()
           .notNullable()
           .references('id')
           .inTable('users');
        tbl.integer('workersid')
           .unique()
           .notNullable()
           .references('id')
           .inTable('workers');
      
      })
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('workers');
};
