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
    Image.findById(req.params.id)
      .select('title link description')
      .lean()
      .then(image => res.send(image))
      .catch(next);
  })

  .delete('/:id', (req, res, next) => {

  })

  .post('/', bodyParser, (req, res, next) => {
    new Image(req.body).save()
      .then(savedImage => res.send(savedImage))
      .catch(next);
  })

  .put('/:id', bodyParser, (req, res, next) => {

  });

module.exports = router;