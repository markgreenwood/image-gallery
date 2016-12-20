import template from './image-thumbnail.html';
import styles from './image-thumbnail.scss';

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

  // this.remove = (id) => {
  //   images.remove(id)
  //     .then(() => {
  //       self.loading = false;
  //       const index = self.images.indexOf(image);
  //       if (index > -1) self.images.splice(index, 1);
  //     });
  // };
}