# Task 4

## Pull Redis docker image (alpine)
```
docker pull redis:alpine
```

## Run Redis server container
```
docker run -d --name redis-server redis:alpine
```

## Run Redis client container (linked to the server container)
```
docker run -d --name redis-client --link redis-server redis:alpine
```

## Open an interactive shell inside the Redis client container
```
docker exec -it redis-client sh
```

## Connect to the server inside the Redis server container
```
redis-cli -h redis-server
```

## Insert data
```
set John "Thakurova 9, 160 00, Prague"
set Alice "Sokolovska 2080, 180 00, Prague"
set Bob "Korunni 810, 101 00, Prague"
```

## Build address server image
```
docker build -t address-server-image ./src
```

## Run address server container (linked to the server container)
```
docker run -dp 8080:8080 --name address-server --link redis-server address-server-image
```

## Test with curl
```
curl localhost:8080/person/John/address
```