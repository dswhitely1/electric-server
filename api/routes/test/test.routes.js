const testRouter = require('express').Router();

function testRoute(req, res) {
  res.json({ api: 'working' });
}

testRouter.get('/', testRoute);

module.exports = testRouter;
