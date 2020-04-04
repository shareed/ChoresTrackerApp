
exports.up = function(knex) {
    return knex.schema.createTable('usersworkers', tbl => {
        tbl.integer('userid')
           .unsigned()
           .notNullable()
           .references('id')
           .inTable('users');
        tbl.integer('workersid')
           .unsigned()
           .notNullable()
           .references('id')
           .inTable('workers');
        tbl.primary(['userid', 'workersid']);
      
      })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('usersworkers');
};
