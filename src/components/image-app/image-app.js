import template from './image-app.html';

export default {
  template,
  controller,
  controllerAs: 'app'
};

function controller() {
  this.img = {
    title: 'David Zabriskie Time Trial',
    link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Dave_Zabriskie_-_USA_Pro_Time_Trial.jpg/1280px-Dave_Zabriskie_-_USA_Pro_Time_Trial.jpg?1481125420015',
    description: 'An extremely fast time trialist, David Zabriskie has clocked an average speed of 54.676 km/h (34 mph) in Tour de France time trials.'
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