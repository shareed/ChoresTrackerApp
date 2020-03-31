const express = require('express');
const db = require('../data/config');


const router = express.Router();

router.get('/', (req, res) => {
  db('users')
  .then(users => {
    res.json(users); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve users' });
  });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('users').where({ id })
             .first()
             .then(user => {
                res.json(user);
  }) 
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve user' });
  });
});


router.post('/', (req, res) => {
  const userData = req.body;
  db('users').insert(userData)
  .then(ids => {
    db('users').where({ id: ids[0] })
    .then(newuserEntry => {
      res.status(201).json(newuserEntry);
    });
  })
  .catch (err => {
    console.log('POST error', err);
    res.status(500).json({ message: "Failed to store data" });
  });
});



router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  db('users').where({ id }).update(changes)
  .then(count => {
    if (count) {
      res.json({ update: count });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to update user' });
  });
});



router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db('users').where({ id }).del()
  .then(count => {
    if (count) {
      res.json({ removed: count });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete user' });
  });
});
  module.exports = router;