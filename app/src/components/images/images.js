import template from './images.html';
import styles from './images.scss';

export default {
  template,
  bindings: {
    albumId: '<',
    myAlbums: '='
  },
  controller,
  controllerAs: 'imagesCtrl'
};

controller.$inject = ['imageService', 'albumService'];

function controller(images, albums) {

  // console.log('imagesCtrl.albumId = ', this.albumId);
  this.styles = styles;
  this.viewTypes = [ 'Details', 'Thumbnail', 'Full' ];
  this.viewType = 'Thumbnail';

  this.loading = true;

  // images.get().then(images => {
  //   this.loading = false;
  //   this.images = images;
  // });

  if (this.albumId) {
    // images.get().then(images => {
    images.getAlbumImages(this.albumId).then(images => {
      this.loading = false;
      this.images = images;
    });
  }
  else {
    images.get().then(images => {
      this.loading = false;
      this.images = images;
    });
  }

  this.add = image => {
    this.loading = true;
    albums.get()
      .then((/*rtndAlbums*/) => {
        // const albumLookup = {};
        // rtndAlbums.forEach((a) => {
        //   albumLookup[a.name] = a._id;
        // });
        if (image.album /* is in database already */) {
          // TODO: replace image.album (name) with album's _id before POSTing
        }
        else {
          // TODO: create the (new) album in the database (POST /api/albums) and get the returned _id
          // TODO: replace image.album (name) with album's _id before POSTing
        }
        images.add(image)
          .then(savedImage => {
            this.loading = false;
            this.images.push(savedImage);
          });
      });
  };

  this.remove = image => {
    this.loading = true;
    images.remove(image._id)
      .then(() => {
        this.loading = false;
        const index = this.images.indexOf(image);
        if (index > -1) this.images.splice(index, 1);
      });
  };

  this.updateView = function() {
    this.showDetail = (this.viewType === 'Details');
    this.showThumbnail = (this.viewType === 'Thumbnail');
    this.showFull = (this.viewType === 'Full');
  };

  this.updateView();
}