import template from './album.html';
import styles from './album.scss';

export default {
  template,
  bindings: {
    album: '<'
  },
  controller,
  controllerAs: 'albumCtrl'
};

// controller.$inject = [ 'albumService' ];

function controller() { // eslint-disable-line no-unused-vars
  this.styles = styles;
}