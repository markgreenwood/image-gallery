describe('image service', () => {
  const { expect } = chai;

  beforeEach(
    angular.mock.module('services', { apiUrl: '/api' })
  );

  let $httpBackend = null, imageService = null;

  beforeEach(angular.mock.inject((_imageService_, _$httpBackend_) => {
    imageService = _imageService_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it ('gets images', (done) => {
    const images = [1, 2, 3];
    $httpBackend
      .expectGET('/api/images')
      .respond(images);

    imageService.get()
      .then((allImages) => {
        expect(allImages).to.deep.equal(images);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('adds image', (done) => {
    const image = {
      title: 'Picture',
      link: 'http://www.example.com',
      description: 'This is a boring test picture'
    };

    $httpBackend
      .expectPOST('/api/images', image)
      .respond(image);

    imageService
      .add(image)
      .then((savedImage) => {
        expect(savedImage).to.deep.equal(image);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

});