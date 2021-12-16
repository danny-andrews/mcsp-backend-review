const request = require('supertest');
const createServer = require('./server');
const { Client } = require("pg");

let db;
beforeEach(() => {
  db = new Client({
    database: "workshop-demo",
  });
  db.connect();
})

afterEach(() => {
  db.end();
})

test('/api/test returns test data', async () => {
  const app = createServer(db)
  const res = await request(app).get('/api/test')
  expect(res.statusCode).toBe(200);
  expect(res.header['content-type']).toMatch(/application\/json/)
  expect(res.body).toEqual([
    { id: 1, name: 'bob' },
    { id: 2, name: 'meg' },
    { id: 3, name: 'maria' }
  ]);
});
