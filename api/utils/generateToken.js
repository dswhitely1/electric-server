const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = {
    id: user.id,
    role: user.role,
  };
  const secret = process.env.SECRET || `Shh, it's a secret`;
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, secret, options);
}

module.exports = generateToken;
