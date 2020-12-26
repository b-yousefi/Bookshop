# byousefi-docker

`docker-compose.yml` runs the following services on the [byousefi.ir](https://byousefi.ir) website:

- [bookshop-spring](https://github.com/b-yousefi/bookshop-spring): bookshop RESTful API
- [bookshop-react](https://github.com/b-yousefi/bookshop-react): bookshop web application
- [portfolio](https://github.com/b-yousefi/portfolio): my personal website
- [byousefi-gateway](https://github.com/b-yousefi/byousefi-gateway): nginx reverse proxy 
- db: MySQL database to persist bookshop application data

## Installation

Use the [docker-compose](https://docs.docker.com/compose/) to run the application.

```bash
docker-compose up
```

## Frameworks and Technologies

- Docker-compose
