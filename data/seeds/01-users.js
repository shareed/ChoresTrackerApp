
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'Shannon', email: 'shannon@email.com', password: 'shannon', phone: 1234567891},
        {id: 2, username: 'Tatum', email: 'tatum@email.com', password: 'tatum', phone: 6754893201},
        {id: 3, username: 'Charity', email: 'charity@email.com', password: 'charity', phone: 9876543210}
      ]);
    });
};
