import template from './image-app.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

function controller() {
  this.img = {
    title: 'Cute Bunny',
    link: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
    description: 'Really, really cute bunny'
  };

  this.tabs = [ 'all', 'details', 'thumbnail', 'full' ];

  this.updateView = function() {
    this.showDetail = (this.tabName === 'details') || (this.tabName === 'all');
    this.showThumbnail = (this.tabName === 'thumbnail') || (this.tabName === 'all');
    this.showFull = (this.tabName === 'full') || (this.tabName === 'all');
  };

  this.tabName = 'all';
  this.updateView();
}