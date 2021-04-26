const request = require('supertest');
const app = require('./index.js');

describe('index', () => {
  it('responds with a book title', async () => {
    const res = await request(app)
      .get('/api/books')
      .expect(200)
      .expect('Content-Type', /json/);

    expect(res.body[0].title).toBe('Wuthering Heights');
  });
});
