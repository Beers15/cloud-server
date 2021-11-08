'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('./user.js');
const bcrypt = require('bcrypt');

console.log(process.env.NODE_ENV);

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const options = process.env.NODE_ENV === 'production' 
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  } : {};

const sequelizeInstance = new Sequelize(DATABASE_URL, options);

const users = UserModel(sequelizeInstance, DataTypes);

/* adding user schema methods here due to undefined sequelize instance error when defining 
   methods in user.js and importing the sequelize instance object from this file */
users.beforeCreate(async (user) => {
  let encryptedPassword = await bcrypt.hash(user.password, 10);
  user.password = encryptedPassword;
});

users.authenticate = async(username, password) => {
  const user = await users.findOne({ 
    where: { username: username }, 
  });
  const valid = bcrypt.compare(password, user.password);
  return valid ? user : false;
};

module.exports = {
  db: sequelizeInstance,
  User: users,
};
