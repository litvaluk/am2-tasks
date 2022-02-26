const http = require("http");

const hostname = '0.0.0.0';
const port = 8080;

http.createServer((req, res) => {

  if ((id = req.url.match("^/([A-Za-z0-9]+)$"))) {
    if (req.method == "GET") {
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.end('Hello ' + id[1]);
    }
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('404 Not Found');
  }

}).listen(port, hostname, () => {
  console.log(`Hello server running at http://${hostname}:${port}/`);
});