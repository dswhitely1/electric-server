require('dotenv').config();
const server = require('./old/api/server');

const port = process.env.PORT || 5000;

server.listen(port, () =>
  console.log(`\n*** Server Listening on PORT:${port} ***\n`)
);
