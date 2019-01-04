const http = require('http');

const server = http.createServer((req, res) => {
  const shouldFail = Math.round(Math.random() * 100) <= 10;

  if (shouldFail) {
    res.writeHead(503);
  }

  res.end('FIN');
});

server.listen(4000);
console.log('Listening on 4000');
