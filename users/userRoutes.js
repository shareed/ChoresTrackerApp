const express = require('express');

const router = express.Router();

const users = [
    {
      id: 1,
      name: 'Shannon',
      phone: 1234567,
    },
    {
      id: 2,
      name: 'Tatum',
      phone: 8910111,
    },
  ];

  let nextId = 3;



router.get('/', (req, res) => {
    const sortField = req.query.sortby || 'id'; //http://localhost:500/tracker?sortby=name
    const response = users.sort(
      (a, b) => (a[sortField] < b[sortField] ? -1 : 1)
    );
  
    res.status(200).json(response);
  });


  router.post('/', (req, res) => {
    const user = req.body;

    user.id = nextId++;
    users.push(user);
  
    res.status(201).json(users);
  });



  router.put('/:id', (req, res) => {
    const user = users.find(h => h.id == req.params.id);
  
    if (!user) {
      res.status(404).json({ message: 'user does not exist' });
    } else {
      Object.assign(user, req.body);
  
      res.status(200).json(user);
    }
  });


router.delete('/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.params)
    res.status(200).json({
      url: `/users/${id}`,
      operation: `DELETE for user with id ${id}`,
    });
  });
  module.exports = router;