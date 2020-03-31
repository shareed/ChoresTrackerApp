const express =require('express');
const path = require('path');
const userRoutes = require('../users/userRoutes')

const server =express();

server.use(express.json())
function logger(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} to ${req.url}  ${req.get('Origin')}`)
  next();
}

function atGate(req, res, next) {
  console.log('At the gate, about to be eaten')
  next();
}

function auth(req, res, next) {
  if (req.url === '/mellon') {
    next();
  } else {
    res.send('You shall not pass!');
  }
}

server.use(logger);
server.use(atGate);

server.get('/mellon', auth, (req, res) => {
  console.log('Gate opening...');
  console.log('Inside and safe');
  res.send('Welcome Traveler!');
});

server.get('/download', (req, res, next) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath, err => {
    if (err) {
      next(err);
    } else {
      console.log('file sent successfully')
    }
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