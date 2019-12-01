const messageRouter = require('express').Router();
const Messages = require('../../../data/models/message.model');
const restricted = require('../../utils/restricted');
const isAdmin = require('../../utils/isAdmin');

function fetchAllMessages(req, res) {
  Messages.findAllMessages()
    .then(messages => {
      res.json(messages);
    })
    .catch(err => res.status(500).json(err));
}

function addMessage(req, res) {
  Messages.addMessage(req.body)
    .then(() => {
      res.status(201);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function updateMessage(req, res) {
  Messages.updateMessage(req.params.id, req.body)
    .then(messages => {
      res.json(messages);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

function deleteMessage(req, res) {
  Messages.deleteMessage(req.params.id)
    .then(messages => {
      res.json(messages);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

messageRouter
  .get('/', restricted, isAdmin, fetchAllMessages)
  .post('/', addMessage)
  .put('/:id', restricted, isAdmin, updateMessage)
  .delete('/:id', restricted, isAdmin, deleteMessage);

module.exports = messageRouter;
