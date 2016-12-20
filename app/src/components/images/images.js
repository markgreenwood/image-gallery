import template from './images.html';
import styles from './images.scss';

export default {
  template,
  bindings: {
    albumId: '<',
    images: '<'
  },
  controller,
  controllerAs: 'imagesCtrl'
};

controller.$inject = ['imageService', 'albumService'];

function controller(images, albums) {

  const self = this;
  self.styles = styles;
  self.viewTypes = [ 'Details', 'Thumbnail', 'Full' ];
  self.viewType = 'Thumbnail';

  self.loading = true;

  albums.get().then(rtndAlbums => {
    self.loading = false;
    self.albumList = rtndAlbums;
  });

  self.add = image => {
    self.loading = true;

    let albumLookup = {};
    self.albumList.forEach((a) => {
      albumLookup[a.name] = a._id;
    });

    if (albumLookup[image.album]) {
      image.album = albumLookup[image.album];
      images
        .add(image)
        .then(savedImage => {
          self.loading = false;
          self.images.push(savedImage);
        });
    }
    else {
      albums
        .add({ name: image.album, description: 'Default description - edit later' })
        .then((addedAlbum) => {
          self.albumList.push(addedAlbum);
          image.album = addedAlbum._id;
          images.add(image)
            .then(savedImage => {
              self.loading = false;
              self.images.push(savedImage);
            });
        });
    }
  };

  self.remove = image => {
    self.loading = true;
    images.remove(image._id)
      .then(() => {
        self.loading = false;
        const index = self.images.indexOf(image);
        if (index > -1) self.images.splice(index, 1);
      });
  };

  self.updateView = function() {
    self.showDetail = (self.viewType === 'Details');
    self.showThumbnail = (self.viewType === 'Thumbnail');
    self.showFull = (self.viewType === 'Full');
  };

  self.updateView();
}