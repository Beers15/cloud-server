const base64 = require('base-64');
const { User } = require('../../models');

const basicAuth = async (req, res, next) => {
  let basicHeaderParts = req.headers.authorization.split(' ');
  let encodedString = basicHeaderParts.pop(); 
  let decodedString = base64.decode(encodedString); 
  let [username, password] = decodedString.split(':'); 

  try {
    const user = await User.authenticate(username, password);
    if(user) {
      res.status(200).json(user);
    }
    else {
      next('Invalid User');
    }
  } catch(err) { 
    err.status = 403;
    next('Invalid Login');
  }
};

module.exports = basicAuth;
