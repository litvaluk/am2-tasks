# Task 3
Simple HTTP Node.js server in Docker. Files:
* ```src/server.js``` - node.js http server
* ```src/Dockerfile``` - file with instructions to assemble the image

## Build image
```
docker build -t hello-server-image ./src
```

## Run container
```
docker run -dp 8888:8080 --name hello-server hello-server-image
```

## Test with curl
```
curl localhost:8888/John
```

## Complete log
[log.txt](log.txt)