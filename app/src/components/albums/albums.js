import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controller
};

controller.$inject = [ 'albumService' ];

function controller(albums) {
  this.styles = styles;
  // this.albumList = [];

  albums.get().then(returnedAlbums => {
    this.albumList = returnedAlbums;
  });    

  // keeps track of currently active album - not sure if we'll need this?
  this.setCurrent = (albumName) => {
    this.currentAlbum = albumName;
  };

}