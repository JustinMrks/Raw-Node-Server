const http = require('http');
const routes = require('./routes');

const PORT = routes.port;

const server = http.createServer(routes.handler);

server.listen(PORT);
