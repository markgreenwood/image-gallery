import template from './image-detail.html';
import styles from './image-detail.scss';

export default {
  template,
  bindings: {
    images: '<'
  },
  require: {
    imagesCtrl: '^images'
  },
  controller
};

function controller() {
  this.styles = styles;
}