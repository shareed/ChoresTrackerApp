
exports.seed = function(knex) {
  return knex('workers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('workers').insert([
        {id: 1, workername: 'Shakeya', email: 'Shakeya@email.com', password: 'Shakeya', phone: 1234241991},
        {id: 2, workername: 'Keith', email: 'Keith@email.com', password: 'Keith', phone: 6754257801},
        {id: 3, workername: 'Keon', email: 'Keon@email.com', password: 'Keon', phone: 9872619210},
        {id: 4, workername: 'Lillian', email: 'Lillian@email.com', password: 'Lillian', phone: 9878369210}
      ]);
})};
