import template from './images.html';
import styles from './images.css';

export default {
  template,
  controller,
  controllerAs: 'app'
};

controller.$inject = ['imageService'];

function controller(images) {

  this.styles = styles;

  this.loading = true;

  images.get().then(images => {
    this.loading = false;
    this.images = images;
  });

  this.tabs = [ 'all', 'details', 'thumbnail', 'full' ];

  this.updateView = function() {
    this.showDetail = (this.tabName === 'details') || (this.tabName === 'all');
    this.showThumbnail = (this.tabName === 'thumbnail') || (this.tabName === 'all');
    this.showFull = (this.tabName === 'full') || (this.tabName === 'all');
  };

  this.tabName = 'all';
  this.updateView();
}