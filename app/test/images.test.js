describe ('images component', () => {

  const { expect } = chai;
  
  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;

  beforeEach(angular.mock.inject($componentController => {
    $component = $componentController;
  }));

  describe ('create component', () => {

    // make up some images to use for testing
    const images = [
      {
        title: 'Cute Bunny',
        link: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
        description: 'Really, really cute bunny'
      },
      {
        title: 'David Zabriskie time trial',
        link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Dave_Zabriskie_-_USA_Pro_Time_Trial.jpg/1280px-Dave_Zabriskie_-_USA_Pro_Time_Trial.jpg?1481125420015',
        description: 'David is a really fast time-trialist who\'s been clocked at 34 mph'
      }
    ];

    const image = {
      title: 'Bean walking on the Moon',
      link: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwi2ht3mt-PQAhUY_WMKHe07DOEQjRwIBw&url=http%3A%2F%2Fwww.armaghplanet.com%2Fblog%2Fnasas-lunar-module-everything-you-need-to-know.html&psig=AFQjCNElkHw9_v_vzsGUXfYxo0JxGz0iMw&ust=1481246602199850',
      description: 'Alan Bean leaves the lunar module and walks on the Moon'
    };

    // mock the service for testing
    const imageService = {
      get() {
        return Promise.resolve(images);
      },
      add() {
        return Promise.resolve(image);
      }
    };

    // test that the component loads the images
    it ('loads images', done => {
      const component = $component('images', { imageService });
      expect(component.loading).to.be.ok;
      setTimeout(() => {
        expect(component.images).to.deep.equal(images);
        expect(component.loading).to.not.be.ok;
        done();
      });
    });

    it ('adds an image', done => {
      const component = $component('images', { imageService });
      component.add(image);

      setTimeout(() => {
        expect(images.length).to.equal(3);
        expect(images[2]).to.deep.equal(image);
        done();
      });
    });
  });

});