const net = require('net');

const port = 8124;

var orderOpened = false;
var orderItems = [];

const server = net.createServer((c) => {
  console.log(`client connected (${c.remoteAddress})`);
  c.setEncoding('utf8');

  c.on('data', (data) => {
    const str = data.toString().replace(/\s+/g, ' ').trim();

    if (str === 'exit') {
      c.end();
    } else if (str === 'open') {
      if (orderOpened) {
        c.write('order is already opened\n');
      } else {
        orderOpened = true;
        c.write('new order opened\n');
      }
    } else if (str === 'process') {
      if (!orderOpened) {
        c.write('order is not opened\n');
      } else {
        c.write(`order processed (${orderItems})\n`);
        orderOpened = false;
        orderItems = [];
      }
    } else if (str === 'show') {
      if (!orderOpened) {
        c.write('order is not opened\n');
      } else {
        c.write(`${orderItems}\n`);
      }
    } else if (str === 'add' || str === 'add ') {
      c.write('no item specified\n');
    } else if (str.startsWith('add ')) {
      if (!orderOpened) {
        c.write('order is not opened\n');
      } else {
        const item = str.substring(4);
        orderItems.push(item);
        c.write(`added (${item})\n`);
      }
    } else {
      c.write('invalid instruction\n');
    }
  });

  c.on('end', () => {
    console.log(`client disconnected (${c.remoteAddress})`);
  });
});

server.on('error', (err) => {
  throw err;
});

server.listen(port, () => {
  console.log(`server started on port ${port}`);
});