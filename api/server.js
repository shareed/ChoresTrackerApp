const express =require('express');

const userRoutes = require('../users/userRoutes')

const server =express();

server.use(express.json())


server.use('/users', userRoutes)

server.use(function(req, res) {
  res.status(404).send(`WRONG URL`);
})

module.exports = server;