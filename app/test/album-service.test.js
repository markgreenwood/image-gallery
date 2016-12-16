describe('album service', () => {
  const { expect } = chai;

  beforeEach(
    angular.mock.module('services', { apiUrl: '/api' })
  );

  let $httpBackend = null, albumService = null;

  beforeEach(angular.mock.inject((_albumService_, _$httpBackend_) => {
    albumService = _albumService_;
    $httpBackend = _$httpBackend_;
  }));

  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  const album = {
    name: 'Generic Album',
    description: 'Boring...'
  };

  it ('gets albums', (done) => {
    const albums = [1, 2, 3];
    $httpBackend
      .expectGET('/api/albums')
      .respond(albums);

    albumService.get()
      .then((allAlbums) => {
        expect(allAlbums).to.deep.equal(albums);
        done();
      })
      .catch(done);

    $httpBackend.flush();
  });

  it ('adds album', (done) => {

    $httpBackend
      .expectPOST('/api/albums', album)
      .respond(album);

    albumService
      .add(album)
      .then((savedAlbum) => {
        expect(savedAlbum).to.deep.equal(album);
        done();
      })
      .catch(done);

    $httpBackend.flush();

  });

  it ('removes album', (done) => {

    $httpBackend
      .expectDELETE('/api/albums/1')
      .respond(album);

    albumService
      .remove(1)
      .then((deletedAlbum) => {
        expect(deletedAlbum).to.deep.equal(album);
        done();
      })
      .catch(done);

    $httpBackend.flush();

  });

});