# node-python

## developemnt mode
```
  # Terminal 1
  docker-compose up --build
  # Terminal 2
  docker-compose exec app sh
```
## production build and test in local
```
  docker build -t node-python:1.0 .
  docker run node-python:1.0
```
