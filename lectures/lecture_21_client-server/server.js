const http = require('http');
const fs = require('fs');

const requestListener = function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  const data = fs.readFileSync('./data.json', 'utf8');
  res.end(data);
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log('Server started');
