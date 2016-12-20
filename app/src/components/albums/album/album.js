import template from './album.html';
import styles from './album.scss';

export default {
  template,
  controller,
  controllerAs: 'albumCtrl'
};

controller.$inject = [ 'albumService' ];

function controller(albums) { // eslint-disable-line no-unused-vars
  this.styles = styles;
}