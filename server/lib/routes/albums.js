const express = require('express');
const albums = express.Router();
const bodyParser = require('body-parser').json();
const Album = require('../models/album');
const Image = require('../models/image');

albums
  .get('/', (req, res, next) => {
    const query = {};
    Album.find(query)
      .select('name description')
      .lean()
      .then(albums => res.send(albums))
      .catch(next);
  })

  .get('/:id/images', (req, res, next) => {
    Image.find({ album: req.params.id })
      .then(images => res.send(images))
      .catch(next);
  })
  
  .get('/:id', (req, res, next) => {
    Promise.all([
      Album.findById(req.params.id).select('name description').lean(),
      Image.find({ album: req.params.id }).lean()
    ])
    .then(([ album, images ]) => {
      album.images = images;
      res.send(album);
    })
    .catch(next);
  })

  .post('/', bodyParser, (req, res, next) => {
    new Album(req.body).save()
      .then((savedAlbum) => { res.send(savedAlbum); })
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    // TODO: Implement PUT /api/images/:id
    return Promise.resolve(next);
  })

  .delete('/:id', (req, res, next) => {
    Album.findByIdAndRemove(req.params.id)
      .then(deletedAlbum => res.send(deletedAlbum))
      .catch(next);
  });

module.exports = albums;