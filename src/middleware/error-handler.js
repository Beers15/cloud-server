'use strict';

module.exports = function(err, req, res, next) {
  console.log(err);
  res.send(err);
};
