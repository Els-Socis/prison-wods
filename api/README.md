# Prison Wods API

There are two ways to run Prison Wods API: locally or by running a Docker container (the preferred way).

## Locally
In order to be able to run it you'll need to have [Node](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed in your machine.

First of all, you need to run the DB container:
```sh
docker run --name db -p 27017:27017 mongo
```

After that, you now can run our application:
```sh
yarn && yarn run dev
```

You are all set and can navigate to http://localhost:3000/docs and begin to play!

## Docker
You must go outside /api folder and run:

```sh
docker-compose up
```
