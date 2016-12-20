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

function controller() {
  this.styles = styles;
}