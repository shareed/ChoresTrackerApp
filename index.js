const server = require('./api/server.js'); 

const hostname = '127.0.0.1';
const port = 8000; 

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
  