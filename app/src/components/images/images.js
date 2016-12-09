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

  this.add = image => {
    this.loading = true;
    images.add(image)
      .then(savedImage => {
        this.loading = false;
        this.images.push(savedImage);
      });
  };
  
  this.tabs = [ 'details', 'thumbnail', 'full' ];

  this.updateView = function() {
    this.showDetail = (this.tabName === 'details') || (this.tabName === 'all');
    this.showThumbnail = (this.tabName === 'thumbnail') || (this.tabName === 'all');
    this.showFull = (this.tabName === 'full') || (this.tabName === 'all');
  };

  this.tabName = 'thumbnail';
  this.updateView();
}