import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controller
};

controller.$inject = [ 'albumService' ];

function controller(albums) {
  this.styles = styles;

  albums.get().then(returnedAlbums => {
    this.albumList = returnedAlbums;
  });

  this.add = (album) => {
    albums.add(album);
  };

}