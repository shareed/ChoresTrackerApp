const express = require('express');
const bcrypt = require('bcryptjs');
const Users = require('./userModel.js')

const router = express.Router();




//Bcrypt hashing password
router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 12)
  user.password = hash
  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

//Bcrypt validating password
router.post('/login', (req, res) => {
  let { email, password } = req.body;
  Users.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: `Welcome ${user.username}!` });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


router.get('/', (req, res) => {
  Users.find(req.query)
  .then(users => {
    res.json(users); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve users' });
  });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;

  Users.findById(req.params.id)
             .then(user => {
                res.json(user);
  }) 
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve user' });
  });
});


router.post('/', (req, res) => {
  Users.add(req.body)
        .then(newUser => {
          res.status(201).json(newUser);
        })
        .catch (err => {
        console.log('POST error', err);
        res.status(500).json({ message: "Failed to store data" });
      });
    });



router.put('/:id', (req, res) => {
  Users.update(req.params.id, req.body)
  .then(user => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'The user could not be found' });
    }
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error updating the user',
    });
  });
});



router.delete('/:id', (req, res) => {
  Users.remove(req.params.id)
  .then(count => {
    if (count > 0) {
      res.status(200).json({ message: 'The user has been removed' });
    } else {
      res.status(404).json({ message: 'The user could not be found' });
    }
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error removing the user',
    });
  });
});
  module.exports = router;