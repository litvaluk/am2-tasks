const http = require('http');
const redis = require('redis');

const hostname = '0.0.0.0';
const port = 8080;

const redisClient = redis.createClient({
  socket: {
    host: 'redis-server'
  }
});

redisClient.connect().then(() => {
  console.log('Connected to redis')
  http.createServer((req, res) => {
    if ((id = req.url.match('^/person/([A-Za-z0-9]+)/address$'))) {
      if (req.method == "GET") {
        res.writeHead(200, {
          'Content-Type': 'text/plain'
        });
        const person = id[1];
        redisClient.get(person).then(val => {
          if (val == null) {
            res.end(`No address stored for '${person}'`);
          } else {
            res.end(val);
          }
        });
      }
    } else {
      res.writeHead(404, {
        'Content-Type': 'text/plain'
      });
      res.end('404 Not Found');
    }
  }).listen(port, hostname, () => {
    console.log(`Address server running at http://${hostname}:${port}/`);
  });
}).catch(err => {
  console.error('Error while connecting to redis', err)
});
