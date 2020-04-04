
exports.seed = function(knex) {
      // Inserts seed entries
  return knex('usersworkers').insert([
    { userid: 1, workersid: 1 },
    { userid: 1, workersid: 2 },
    { userid: 1, workersid: 3 },
    { userid: 1, workersid: 4 }
  ]);
};
