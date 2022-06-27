# Pokemon-api

This is a Pokemon api done by node(express) to practice backend

## Tech Stack


**Server:** Node, Express, postgres, sequelize\
**Frontend:** React, typeScript


## Run Locally

Clone the project

```bash
  git clone https://github.com/Yordy2001/pokemon-api.git
```

Go to the project directory

```bash
  cd pokemon-api
```

Install dependencies

### Run server

Go to the server directory

```bash
  cd server
```

Install dependences

```bash
  npm install
```

Start the server

```bash
  npm run dev
```  
### Run Frontend

Go to the frontend directory

```bash
  cd frontend
```
Install dependeces

```bash
  npm install
```

Start app

```bash
  npm run dev
```  

## Migrations

Create database pokemon-api with npx sequelize-cli db:create

### run migrations

```bash
  npx sequelize-cli db:migrate
```
### run seeders

```bash
  npx sequelize-cli db:seed:all
```
