const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser').json();
const Image = require('../models/image');

router
  .get('/', (req, res, next) => {
    const query = {};
    
    Image.find(query)
      .select('title link description')
      .lean()
      .then(images => res.send(images))
      .catch(next);
  })
  
  .get('/:id', (req, res, next) => {

  })

  .delete('/:id', (req, res, next) => {

  })

  .post('/', (req, res, next) => {

  })

  .put('/:id', (req, res, next) => {

  });

module.exports = router;