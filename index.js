const http = require('http');
const got = require('got');
const HttpAgent = require('agentkeepalive');

const httpAgent = new HttpAgent();

const server = http.createServer((req, res) => {
  got(process.env.TARGET_URL, {
    agent: {
      http: httpAgent
    },
    timeout: {
      socket: 500
    }
  })
    .then(() => {
      res.end('OK');
    })
    .catch(err => {
      console.log('Failed', err.message);
      res.end('FAIL');
    });
});

server.listen(3000);
console.log('Listening on 3000');
