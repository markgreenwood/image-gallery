/* globals angular, chai */
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

  it ('get images', (done) => {
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

});