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
});