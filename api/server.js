const express =require('express');

const userRoutes = require('../users/userRoutes')

const server =express();

server.use(express.json())

server.use('/users', userRoutes)



module.exports = server;