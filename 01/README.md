# Task 1
Simple Stateful/Stateless server (Node.js, using network module) that simulates a cart/order.

## Stateful
Run the server using `node src/stateful.js` (the server runs on port 8124). Connect to the server using `telnet 127.0.0.1 8124`. These operations can be performed:

* open - open a new order
* add \<item> - add an item to the order (any kind of string, number...)
* show - show order items
* process - process the order
* exit - exit the connection

### Example of communication
#### Server
```
❯ node src/stateful.js
server started on port 8124
client connected (::ffff:127.0.0.1)
client disconnected (::ffff:127.0.0.1)
```
#### Client
```
❯ telnet 127.0.0.1 8124
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
open
new order opened
add item1
added (item1)
add item2
added (item2)
show
item1,item2
process
order processed (item1,item2)
exit
Connection closed by foreign host.
```

## Stateless
Run the server using ```node src/stateless.js```. Perform operations using REST API (on `localhost:8080`):
* `POST /open` - open a new order
* `POST /add?item=<item>` - add an item to the order (any kind of string, number...)
* `GET /show` - show order items
* `POST /process` - process the order

### Example of communication
```
❯ curl -X POST "localhost:8080/open"
new order opened
❯ curl -X POST "localhost:8080/add?item=item1"
added (item1)
❯ curl -X POST "localhost:8080/add?item=item2"
added (item2)
❯ curl "localhost:8080/show"
item1,item2
❯ curl -X POST  "localhost:8080/process"
order processed (item1,item2)
```