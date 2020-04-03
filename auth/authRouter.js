const bcrypt = require('bcryptjs');
const router = require("express").Router()
const Users = require("../users/userModel.js")

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
          req.session.user = user; // saving the users in the session for the cookie
          res.status(200).json({ message: `Welcome ${user.username}!` });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });


  router.get('/logout', (req, res) => {
    if(req.session) {
      req.session.destroy(err => {
        if(err) {
          res.json({message: "There was an error"})
        }else {
          res.status(200).json({message: "You are logged out"})
        }
      })
    }else {
      res.status(200).json({meaasge: 'You are not logged in'})
    }
  })
  
module.exports = router