# Bookshop

[Bookshop](https://byousefi.ir/) is an imaginary online bookshop with the following features:
- displaying books, with pagination 
- display book information with links to its authors, and categories
- filtering books based on author, category and publication
- displaying authors with the ability to filter
- displaying author information including his/her books
- displaying categories with their subcategories and the books in that category 
- registering user
- adding books to the shopping cart
- completing the order by choosing the address that is going to be sent to
- displaying user information, its profile, addresses, and orders
- adding address, marking the place on map

<img align="center" src="https://drive.google.com/uc?id=18h6UasOuSl9HjndcNN1I75yL0eSq0008" />

## Installation

Use the [docker-compose](https://docs.docker.com/compose/) to run the application. It will run three services: the React web application, the Mysql database and the spring boot api.

```bash
docker-compose up
```

## Frameworks and Technologies

- Back-end:
  - Spring Boot, Data rest
  - Django Rest Framework
- Front-end:
  - React.js
- Deployment:
  - Docker
