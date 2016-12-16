import template from './images.html';
import styles from './images.scss';

export default {
  template,
  controller,
  controllerAs: 'imagesCtrl'
};

controller.$inject = ['imageService'];

function controller(images) {

  this.styles = styles;
  this.viewTypes = [ 'Details', 'Thumbnail', 'Full' ];
  this.viewType = 'Thumbnail';

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

  this.remove = image => {
    this.loading = true;
    images.remove(image._id)
      .then(() => {
        this.loading = false;
        const index = this.images.indexOf(image);
        if (index > -1) this.images.splice(index, 1);
      });
  };

  this.updateView = function() {
    this.showDetail = (this.viewType === 'Details');
    this.showThumbnail = (this.viewType === 'Thumbnail');
    this.showFull = (this.viewType === 'Full');
  };

  this.updateView();
}