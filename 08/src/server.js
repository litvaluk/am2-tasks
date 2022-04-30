const http2 = require('http2');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http2.createSecureServer({
  key: fs.readFileSync(path.join(__dirname, 'localhost-privkey.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'localhost-cert.pem'))
});

server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end(fs.readFileSync(path.join(__dirname, 'index.html')));
});

server.listen(port, hostname, () => console.log(`Server running at https://${hostname}:${port}/`));