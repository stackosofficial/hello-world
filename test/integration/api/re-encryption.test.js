const { expect } = require('chai');

server = require('../../../src/index');
request = require('supertest')(server);

describe('re-encryption endpoint', () => {
  it('should return data', async () => {
    const res = await request.get('/').set('Accept', 'application/json');

    console.log(res.body);

    expect(res.body.success).to.equal(true);
    expect(res.body.data).to.be.a('string');
  });
});
