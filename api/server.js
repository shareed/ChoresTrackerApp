const express =require('express');

const server =express();

server.use(express.json())

const kids = [
    {
      id: 1,
      name: 'Shakeya',
      phone: 1234567,
    },
    {
      id: 2,
      name: 'Keith',
      phone: 8910111,
    },
  ];

  let nextId = 3;

server.get('/tracker', (req, res)  => {
        res.send('This Is A Node Server, for the Chores Tracker App');
});


server.get('/tracker/kids', (req, res) => {
    console.log(req.query);
    const sortField = req.query.sortby || 'id'; //http://localhost:500/tracker?sortby=name
    const response = kids.sort(
      (a, b) => (a[sortField] < b[sortField] ? -1 : 1)
    );
  
    res.status(200).json(response);
  });


  server.post('/tracker/kids', (req, res) => {
    const kid = req.body;
    kid.id = nextId++;
  
    kids.push(kid);
    console.log(req.body);
  
    res.status(201).json(kids);
  });



  server.put('/tracker/kids/:id', (req, res) => {
    const kid = kids.find(h => h.id == req.params.id);
  
    if (!kid) {
      res.status(404).json({ message: 'Kid does not exist' });
    } else {
      Object.assign(kid, req.body);
  
      res.status(200).json(kid);
    }
  });


server.delete('/tracker/kids/:id', (req, res) => {
    const id = req.params.id;
    console.log(req.params)
    res.status(200).json({
      url: `/tracker/${id}`,
      operation: `DELETE for kid with id ${id}`,
    });
  });

module.exports = server;