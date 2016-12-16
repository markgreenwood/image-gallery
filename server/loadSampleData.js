const fs = require('fs');
const Image = require('./lib/models/image');
const Album = require('./lib/models/album');
const connection = require('./lib/setup-mongoose');

const albums = JSON.parse(fs.readFileSync('sample.albums.json'));
const samples = JSON.parse(fs.readFileSync('sample.images.json'));

console.log('Loaded ', albums.length, ' albums');
console.log('Loaded ', samples.length, ' images');

const drop = () => connection.db.dropDatabase(loadstuff);

if (connection.readyState === 1) drop();
else {
  connection.on('open', drop);
}

const loadstuff = () => {
  Promise.all(
    albums.map((album) => {
      console.log('Saving album ', album);
      return new Album(album).save();
    })
  )
  .then(() => {
    Promise.all(
      samples.map((image) => {
        return Album.findOne({ name: image.album })
          .then((album) => {
            image.album = album._id;
            console.log(album, image);
            return new Image(image).save();
          });
      })
    )
    .then(() => {
      process.exit(0);
    });
  });
};