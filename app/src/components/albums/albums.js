import template from './albums.html';
import styles from './albums.scss';

export default {
  template,
  controller,
  controllerAs: 'albumsCtrl'
};

controller.$inject = [ 'albumService' ];

function controller(albums) {
  const self = this;
  self.styles = styles;

  albums.get().then(albums => {
    self.albums = albums;
  });

}