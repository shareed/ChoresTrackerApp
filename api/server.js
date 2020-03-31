const express =require('express');
const morgan = require('morgan');
const helmet =require('helmet');
const userRoutes = require('../users/userRoutes')

const server =express();
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json())

server.get('/', (req, res) => {
  res.send('HELLO, YOU HAVE ENTERED MY CHORES TRACKER SERVER')
})
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