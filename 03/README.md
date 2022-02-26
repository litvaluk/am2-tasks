# Task 3

## Build image
```
docker build -t hello-service-image ./src
```

## Run container
```
docker run -dp 8888:8080 --name hello-service hello-service-image
```

## Test with curl
```
curl localhost:8888/John
```