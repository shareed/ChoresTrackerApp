const express = require('express');
const Workers = require('./workerModel.js');
const protected = require('../auth/restricted-middleware.js');


const router = express.Router();

router.get('/', protected, (req, res) => {
  Workers.find(req.query)
  .then(workers => {
    res.json(workers); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve workers' });
  });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;

  Workers.findById(req.params.id)
             .then(worker => {
                res.json(worker);
  }) 
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve worker' });
  });
});


router.post('/', (req, res) => {
  Workers.add(req.body)
        .then(newworker => {
          res.status(201).json(newworker);
        })
        .catch (err => {
        console.log('POST error', err);
        res.status(500).json({ message: "Failed to store data" });
      });
    });



router.put('/:id', (req, res) => {
  Workers.update(req.params.id, req.body)
  .then(worker => {
    if (worker) {
      res.status(200).json(worker);
    } else {
      res.status(404).json({ message: 'The worker could not be found' });
    }
  })
  .catch(error => {
    // log error to server
    console.log(error);
    res.status(500).json({
      message: 'Error updating the worker',
    });
  });
});



router.delete('/:id', (req, res) => {
  Workers.remove(req.params.id)
  .then(count => {
    if (count > 0) {
      res.status(200).json({ message: 'The worker has been removed' });
    } else {
      res.status(404).json({ message: 'The worker could not be found' });
    }
  })
  .catch(error => {
    console.log(error);
    res.status(500).json({
      message: 'Error removing the worker',
    });
  });
});
  module.exports = router;