import template from './new-image.html';
import styles from './new-image.scss';

export default {
  template,
  bindings: {
    add: '<'
  },
  controller
};

function controller() {
  this.styles = styles;

  this.reset = () => {
    this.title = '';
    this.link = '';
    this.description = '';
  };

  this.reset();

  this.addNew = () => {
    this.add({
      title: this.title,
      link: this.link,
      description: this.description,
      album: this.album
    });
    this.reset();
  };
}