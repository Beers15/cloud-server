'use strict';

const app = require('../src/server.js');
const supertest = require('supertest');
const { db } = require('../src/models');
const request = supertest(app.app);
const bcrypt = require('bcrypt');

// Initialize any things that our tests need
beforeAll(async () => {
  await db.drop();
  // make sure that my tables exist.
  await db.sync(); // creates our tables if they do not exist
});

// remove any side effects from our test
afterAll(async () => {
  // drops all table rows within our database instance.  After all tests 
  await db.drop();
});

//since all the Sequelize models use the same collection interface, only routes with a single model
describe('Testing the express server', async() => {
  it('Should add a user to the database to the database', async () => {
    const body = {'username': 'test123', 'password': 'secret123'};
    const response = await request.post('/signup').send(body).set('Content-type', 'application/json');

    expect(response.statusCode).toBe(201);
    expect(JSON.parse(response.text).username).toBe('test123');
    
    let temp = await JSON.parse(response.text).password;
    expect(await bcrypt.compare('secret123', temp)).toBe(true);
  });

  it('Should let an existing user log in', async () => {
    //create a user before attempting a login
    const body = {'username': 'test321', 'password': 'secret321'};
    const response = await request.post('/signup').send(body).set('Content-type', 'application/json');

    expect(response.statusCode).toBe(201);
    expect(JSON.parse(response.text).username).toBe('test321');
    
    let temp = await JSON.parse(response.text).password;
    expect(await bcrypt.compare('secret321', temp)).toBe(true);

    const loginResponse = await request.post('/signin').auth('test321', 'secret321');

    expect(JSON.parse(loginResponse.text).username).toBe('test321');
    expect(loginResponse.statusCode).toBe(200);
    
    let temp2 = await JSON.parse(loginResponse.text).password;
    expect(await bcrypt.compare('secret321', temp2)).toBe(true);
  });
});