const authRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../../../data/models/user.model');
const validateRegisterInputs = require('../../../data/validators/register.validation');
const validateLoginInputs = require('../../../data/validators/login.validation');
const generateToken = require('../../utils/generateToken');

function register(req, res) {
  const { errors, isValid } = validateRegisterInputs(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Users.findUserBy({ username: req.body.username })
    .then(user => {
      if (user.length > 0) {
        errors.username = 'Username is already taken';
        return res.status(400).json(errors);
      }
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      const {username, password} = req.body;
      Users.addUser({username, password})
        .then(newUser => {
          const token = generateToken(newUser[0]);
          const message = `Welcome ${newUser[0].username}!`;
          res.status(201).json({ token, message });
        })
        .catch(err => {
          res.status(500).json(err);
        });
    })
    .catch(err => res.status(500).json(err));
}

function login(req, res) {
  const { errors, isValid } = validateLoginInputs(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Users.findUserBy({ username: req.body.username }).then(user => {
    if (user.length === 0) {
      errors.username = 'Username not found';
      return res.status(400).json(errors);
    }
    if (bcrypt.compareSync(req.body.password, user[0].password)) {
      const token = generateToken(user[0]);
      const message = `Welcome back ${user[0].username}!`;
      return res.json({ token, message });
    }
    errors.password = 'Incorrect Password';
    return res.status(401).json(errors);
  });
}

authRouter.post('/login', login).post('/register', register);

module.exports = authRouter;
