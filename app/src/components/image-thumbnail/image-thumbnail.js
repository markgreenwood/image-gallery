import template from './image-thumbnail.html';
import styles from './image-thumbnail.scss';

export default {
  template,
  bindings: {
    images: '<',
  },
  controller
};

function controller() {
  this.styles = styles;
}