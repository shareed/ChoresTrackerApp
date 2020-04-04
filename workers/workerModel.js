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

  let rows = db('workers')
    .orderBy(sortby, sortdir)
    .limit(limit)
    .offset(offset);

  return rows;
}


function findBy(filter) {
  return db('workers')
    .where(filter)
    
}




function findById(id) {
  return db('workers')
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db('workers').insert(user);

  return findById(id);
}

function remove(id) {
  return db('workers')
    .where({ id })
    .del();
}

function update(id, changes) {
  return db('workers')
    .where({ id })
    .update(changes, '*');
}

