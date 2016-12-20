describe ('images component', () => {

  const { expect } = chai;
  
  beforeEach(
    angular.mock.module('components')
  );

  let $component = null;

  beforeEach(angular.mock.inject(($componentController) => {
    $component = $componentController;
  }));

  describe ('create component', () => {

    // make up some images to use for testing
    const images = [
      {
        title: 'Cute Bunny',
        link: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
        description: 'Really, really cute bunny',
        album: 'Bunnies'
      },
      {
        title: 'David Zabriskie time trial',
        link: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Dave_Zabriskie_-_USA_Pro_Time_Trial.jpg/1280px-Dave_Zabriskie_-_USA_Pro_Time_Trial.jpg?1481125420015',
        description: 'David is a really fast time-trialist who\'s been clocked at 34 mph',
        album: 'Cycling'
      }
    ];

    const image = {
      title: 'Bean walking on the Moon',
      link: 'http://www.armaghplanet.com/blog/wp-content/uploads/2011/09/Image-of-as12-46-6728.jpg',
      description: 'Alan Bean leaves the lunar module and walks on the Moon',
      album: 'Space'
    };

    const albums = [
      {
        _id: 1,
        name: 'Bunnies',
        description: 'Rabbits'
      },
      {
        _id: 2,
        name: 'Cycling',
        description: 'Bike racing'
      }
    ];

    const album = {
      name: 'Space',
      description: 'Exploring outer space'
    };

    // mock the service for testing
    const imageService = {
      get(albumId) { // eslint-disable-line no-unused-vars
        return Promise.resolve(images);
      },
      add() {
        return Promise.resolve(image);
      },
      remove(id) { // eslint-disable-line no-unused-vars
        return Promise.resolve(image);
      }
    };

    const albumService = {
      get() {
        return Promise.resolve(albums);
      },
      getImages() {
        return Promise.resolve(images);
      },
      remove(id) { // eslint-disable-line no-unused-vars
        return Promise.resolve(album);
      },
      add(album) {
        return Promise.resolve(album);
      }
    };

    // test that the component loads the images
    it ('loads images', done => {
      const component = $component('images', { imageService, albumService }, { images, albumId: 1, albumList: albums });
      expect(component.loading).to.be.ok;
      setTimeout(() => {
        expect(component.images).to.deep.equal(images);
        expect(component.loading).to.not.be.ok;
        done();
      });
    });

    it ('adds an image', done => {
      const component = $component('images', { imageService, albumService }, { images, albumId: 1, albumList: albums });
      component.add(image);
      expect(component.loading).to.be.ok;

      setTimeout(() => {
        expect(component.images.length).to.equal(3);
        expect(component.images[2]).to.deep.equal(image);
        expect(component.loading).to.not.be.ok;
        done();
      });
    });

    it ('removes an image', done => {
      const component = $component('images', { imageService, albumService }, { images, albumId: 1, albumList: albums });
      image._id = 1;
      component.remove(image);
      expect(component.loading).to.be.ok;

      setTimeout(() => {
        expect(component.images.length).to.equal(2);
        expect(component.images).to.deep.equal(images);
        expect(component.loading).to.not.be.ok;
        done();
      });
    });
    
  });
});