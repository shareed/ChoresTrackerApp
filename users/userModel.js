const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
  find,
  findBy,
  findById,
  add,
  remove,
  update

};

function find(query) {
  const { page = 1, limit = 50, sortby = 'id', sortdir = 'asc' } = query;
  const offset = limit * (page - 1);

  let rows = db('users')
    .orderBy(sortby, sortdir)
    .limit(limit)
    .offset(offset);

  return rows;
}


function findBy(filter) {
  return db('users')
    .where(filter)
    
}




function findById(id) {
  return db('users')
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

function remove(id) {
  return db('users')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('users')
    .where({ id })
    .update(changes, '*');
}

