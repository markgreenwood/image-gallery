import template from './image-detail.html';
import styles from './image-detail.scss';

export default {
  template,
  bindings: {
    image: '='
  },
  controller
};

function controller() {
  this.styles = styles;
}