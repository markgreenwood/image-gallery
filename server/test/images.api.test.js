const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

const connection = require('../lib/setup-mongoose');
const app = require('../lib/app');

describe('image', () => {
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
      .get('/api/images')
      .then(res => {
        console.log('Returned from GET /api/images');
        console.log(res.body);
        expect(res.body).to.deep.equal([]);
        done();
      })
      .catch(done);
  });

  const bunny = {
    title: 'Cute Bunny',
    link: 'http://f.cl.ly/items/3g3J1G0w122M360w380O/3726490195_f7cc75d377_o.jpg',
    description: 'Really, really cute bunny'
  };

  it ('POST /api/images', done => {
    console.log('POSTing ', bunny);
    request
      .post('/api/images')
      .send(bunny)
      .then(res => {
        const image = res.body;
        expect(image._id).to.be.ok;
        bunny._id = image._id;
        done();
      })
      .catch(done);
  });

  it ('GET /api/images/:id', done => {
    request
      .get(`/api/images/${bunny._id}`)
      .then(res => {
        const image = res.body;
        expect(image).to.deep.equal(bunny);
        done();
      })
      .catch(done);
  });

  it ('GET /api/images after POST', done => {
    request
      .get('/api/images')
      .then(res => {
        expect(res.body).to.deep.equal([ bunny ]);
        done();
      })
      .catch(done);
  });

  it ('DELETE /api/images/:id', done => {
    request
      .delete(`/api/images/${bunny._id}`)
      .then(res => {
        expect(res.body._id).to.equal(bunny._id);
        done();
      })
      .catch(done);
  });

});