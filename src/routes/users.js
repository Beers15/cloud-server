'use strict';

const express = require('express');
const router = express.Router();
const basicAuth = require('../middleware/auth/basicAuth');
const { User } = require('../models');

router.post('/signup', async(req, res) => {
  try {
    const record = await User.create(req.body);
    res.status(201).json(record);
  } catch (err) { res.status(403).send(err); }
});


router.post('/signin', basicAuth, (req, res) => {});

module.exports = router;