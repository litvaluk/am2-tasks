const http2 = require('http2');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 8443;

const resources = [
  '/static/script.js',
  '/static/styles.css',
  '/static/image.png',
]

const server = http2.createSecureServer({
  key: fs.readFileSync('localhost-privkey.pem'),
  cert: fs.readFileSync('localhost-cert.pem')
});

server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
  for (const resource of resources) {
    stream.pushStream({ ':path': resource }, (err, pushStream) => {
      if (err) {
        throw err;
      }
      pushStream.respondWithFile(path.join(__dirname, resource));
    });
  }

  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  
  stream.end(fs.readFileSync(path.join(__dirname, 'index.html')));
});

server.listen(port, hostname, () => {
  console.log(`Server running at https://${hostname}:${port}/`);
});