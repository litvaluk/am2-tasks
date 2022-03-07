const http = require('http');

const hostname = '0.0.0.0';
const port = 8080;

var orderOpened = false;
var orderItems = [];

const open = (req, res) => {
  if (req.method == "POST") {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    if (orderOpened) {
      res.end('order is already opened\n');
    } else {
      orderOpened = true;
      res.end('new order opened\n');
    }
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('invalid instruction (try POST method)');
  }
}

const process = (req, res) => {
  if (req.method == "POST") {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    if (!orderOpened) {
      res.end('order is not opened\n');
    } else {
      res.end(`order processed (${orderItems})\n`);
      orderOpened = false;
      orderItems = [];
    }
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('invalid instruction (try POST method)');
  }
}

const show = (req, res) => {
  if (req.method == "GET") {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    if (!orderOpened) {
      res.end('order is not opened\n');
    } else {
      res.end(`${orderItems}\n`);
    }
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('invalid instruction (try GET method)');
  }
}

const add = (item, req, res) => {
  if (req.method == "POST") {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    if (!orderOpened) {
      res.end('order is not opened\n');
    } else {
      orderItems.push(item);
      res.end(`added (${item})\n`);
    }
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('invalid instruction (try POST method)');
  }
}


http.createServer((req, res) => {

  if ((id = req.url.match('^/open$'))) {
    open(req, res)
  } else if ((id = req.url.match('^/process$'))) {
    process(req, res)
  } else if ((id = req.url.match('^/show$'))) {
    show(req, res)
  } else if ((id = req.url.match('^/add\\?item=([A-Za-z0-9]+)$'))) {
    add(id[1], req, res)
  } else {
    res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('invalid instruction');
  }

}).listen(port, hostname, () => {
  console.log(`server started on port ${port}/`);
});