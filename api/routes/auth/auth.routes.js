const authRouter = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../../../data/models/user.model');
const Messages = require('../../../data/models/message.model');
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
      const { username, password } = req.body;
      Users.addUser({ username, password })
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

async function login(req, res) {
  try {
    const { errors, isValid } = validateLoginInputs(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const user = await Users.findUserBy({ username: req.body.username });
    if (user.length === 0) {
      errors.username = 'Username and/or Incorrect Password';
      return res.status(400).json(errors);
    }
    if (bcrypt.compareSync(req.body.password, user[0].password)) {
      await Users.updateUser(user[0].id, {
        ...user[0],
        updated_at: new Date(),
      });
      const token = generateToken(user[0]);
      const message = `Welcome back ${user[0].username}!`;
      return res.json({ token, message, lastLogin: user[0].updated_at });
    }
    errors.username = 'Username and/or Incorrect Password';
    return res.status(401).json(errors);
  } catch (err) {
    res.status(500).json(err);
  }
}

function addMessage(req, res) {
  Messages.addMessage(req.body)
      .then(() => {
        res.status(201).json({ message: 'Success' });
      })
      .catch(err => {
        res.status(500).json(err);
      });
}

authRouter.post('/login', login).post('/register', register).post('/messages', addMessage);

module.exports = authRouter;
