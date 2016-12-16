const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('album', () => {
  before (done => {
    const drop = () => connection.db.dropDatabase(done);
    if (connection.readyState === 1) drop();
    else {
      connection.on('open', drop);
    }
  });

  const request = chai.request(app);

  it ('GET all', done => {
    request
      .get('/api/albums')
      .then(res => {
        expect(res.body).to.deep.equal([]);
        done();
      })
      .catch(done);
  });

  const testAlbum = {
    name: 'Generic Album',
    description: 'Really boring generic pictures; nothing at all interesting'
  };

  const testImage = {
    title: 'Generic Picture',
    link: 'www.domain.com',
    description: 'Monotonous picture to test stuff',
    album: 'Generic Album'
  };

  it ('POST /api/albums', done => {
    request
      .post('/api/albums')
      .send(testAlbum)
      .then(res => {
        const postedAlbum = res.body;
        expect(postedAlbum._id).to.be.ok;
        testAlbum._id = postedAlbum._id;
        done();
      })
      .catch(done);
  });

  it ('GET /api/albums/:id', done => {
    request
      .get(`/api/albums/${testAlbum._id}`)
      .then(res => {
        const returnedAlbum = res.body;
        expect(returnedAlbum).to.deep.equal(testAlbum);
        done();
      })
      .catch(done);
  });

  it ('GET /api/albums after POST', done => {
    request
      .get('/api/albums')
      .then(res => {
        expect(res.body).to.deep.equal([ testAlbum ]);
        done();
      })
      .catch(done);
  });

  it ('GET /api/albums/:id/images', done => {
    request
      .get(`/api/albums/${testAlbum._id}/images`)
      .then(res => {
        expect(res.body).to.deep.equal([]);
        done();
      })
      .catch(done);
  });

  it ('POST /api/images with album specified', done => {
    testImage.album = testAlbum._id;
    request
      .post('/api/images')
      .send(testImage)
      .then(res => {
        testImage._id = res.body._id;
        testImage.__v = res.body.__v;
        expect(res.body).to.deep.equal(testImage);
        done();
      })
      .catch(done);
  });

  it ('GET /api/albums/:id/images after POST', done => {
    request
      .get(`/api/albums/${testAlbum._id}/images`)
      .then(res => {
        expect(res.body).to.deep.equal([ testImage ]);
        done();
      })
      .catch(done);
  });

  it ('DELETE /api/albums/:id', done => {
    request
      .delete(`/api/albums/${testAlbum._id}`)
      .then(res => {
        expect(res.body._id).to.equal(testAlbum._id);
        done();
      })
      .catch(done);
  });

});