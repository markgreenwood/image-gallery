import template from './image-full.html';
import styles from './image-full.scss';

export default {
  template,
  bindings: {
    images: '<'
  },
  controller
};

function controller() {
  this.styles = styles;
}