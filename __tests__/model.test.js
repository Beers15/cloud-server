'use strict';

const { db, User } = require('../src/models');
const bcrypt = require('bcrypt');

beforeAll(async () => {
  await db.sync(); 
});

afterAll(async () => {
  await db.drop();
});

describe('Testing our User Sequelize model', () => {
  it('Should be able to create a User', async () => {
    let newUser = await User.create({
      username: 'qwerty',
      password: 'asfghtdstghsdrt',
    });

    console.log(newUser);
    expect(newUser.id).toBe(1);
    expect(newUser.username).toBe('qwerty');

    expect(await bcrypt.compare('asfghtdstghsdrt', newUser.password)).toBe(true);
  });

  it('Should be able to get a specific User', async () => {
    let newUser = await User.findByPk(1);
 
    expect(newUser.id).toBe(1);
    expect(newUser.username).toBe('qwerty');
    
    expect(await bcrypt.compare('asfghtdstghsdrt', newUser.password)).toBe(true);
  });
});
