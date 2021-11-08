'use strict';

const express = require('express');
const app = express(); 
const errorHandler = require('./middleware/error-handler');
const userRoutes = require('./routes/users');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes);
app.use(errorHandler);

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log('server is up on ' + port));
  },
};
