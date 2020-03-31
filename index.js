require('dotenv').config()
const server = require('./api/server.js'); 

server.get('/', (req, res) => {
    res.send('HELLO, YOU HAVE ENTERED MY SERVER')
})

const port =process.env.PORT;

server.listen(port, () => console.log(`\n*** Server Running on http://localhost:${port} ***\n`))
  