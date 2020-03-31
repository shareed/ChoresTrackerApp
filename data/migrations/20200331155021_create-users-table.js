
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.text('username', 128)
           .unique()
           .notNullable();
        tbl.text('email', 128)
           .unique()
           .notNullable(); 
        tbl.text('password', 128)
           .unique()
           .notNullable();   
        tbl.integer('phone', 10)
           .unique()
           .notNullable();
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  
};
