const db = require('../dbConfig');

function findAllMessages() {
  return db('messages');
}

function addMessage(newMessage) {
  return db('messages').insert(newMessage);
}

async function updateMessage(id, updatedMesage) {
  await db('messages')
    .where({ id })
    .update(updatedMesage);
  return db('messages');
}

async function deleteMessage(id) {
  await db('messages')
    .where({ id })
    .del();
  return db('messages');
}

module.exports = { findAllMessages, addMessage, deleteMessage, updateMessage };
