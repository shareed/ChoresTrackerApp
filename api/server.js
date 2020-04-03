const express =require('express');
const morgan = require('morgan');
const helmet =require('helmet');
const cors = require('cors');


const userRoutes = require('../users/userRouter')

const server =express();
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(express.json())

server.get('/', (req, res) => {
  res.send('HELLO, YOU HAVE ENTERED MY CHORES TRACKER SERVER')
})




server.post('/register', (req, res) => {
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
//Error handling middleware
server.use((err, req, res, next) => {
  console.log(err)
  res
  .status(500)
  .json({message: 'There was an err', error: err})
})

server.use('/users', userRoutes)

server.use(function(req, res) {
  res.status(404).send(`WRONG URL`);
})

module.exports = server;