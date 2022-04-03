const http2 = require('http2');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;
const serverRoot = "./public";
const options = {
  key: fs.readFileSync('localhost-privkey.pem'),
  cert: fs.readFileSync('localhost-cert.pem')
}

const server = http2.createSecureServer(options);

server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
  var reqPath = headers[http2.constants.HTTP2_HEADER_PATH];
  if (reqPath === '/') {
    reqPath = '/index.html';
  }
  
  var responseMimeType;
  if (reqPath.endsWith('.js')) {
    responseMimeType = 'application/javascript';
  } else if (reqPath.endsWith('.css')) {
    responseMimeType = 'text/css';
  } else if (reqPath.endsWith('.html')) {
    responseMimeType = 'text/html';
  } else {
    responseMimeType = 'text/plain';
  }

  stream.respondWithFile(path.join(serverRoot, reqPath), {
      'content-type': responseMimeType
  });
});

server.listen(port, hostname, () => console.log(`Server running at https://${hostname}:${port}/`));