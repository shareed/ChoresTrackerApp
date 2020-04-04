const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const session = require('express-session');
const cors = require('cors');

const authRoutes = require("../auth/authRouter.js");
const userRoutes = require('../users/userRouter')
const workerRoutes = require('../workers/workerRouter')
const server =express();


const sessionConfig = {
  name: 'lovethekids',
  secret: 'do not tell anyone about this!!!',
  cookie: {
    maxAge: 1000 * 60, //60 seconds
    secure: false, //Send the cookie over http (un encrypted connection) should be true in production, need to dynamically change using env variables
    httpOnly: true, //no js code on the client will get access to the cookie
  },
  resave: false, // do you want to recreate sessions when nothing has changed
  saveUninitialixed: false, //only true once a user ops in, need to dynamically change using env variables
}


server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

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

server.use("/auth", authRoutes);
server.use('/users', userRoutes)
server.use('/workers', workerRoutes)

server.use(function(req, res) {
  res.status(404).send(`WRONG URL`);
})

module.exports = server;