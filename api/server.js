const express =require('express');

const server =express();

server.use(express.json())

server.get('/', (req, res)  => {
        res.send('This Is A Node Server, for the Chores Tracker App');
});


module.exports = server;