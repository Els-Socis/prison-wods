const Hapi = require('@hapi/hapi');

const db = require('./db');
const repositories = require('./repositories');
const routes = require('./routes');

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

(async () => {
  const server = Hapi.server({
    host: 'localhost',
    port: 3000,
  });

  await server.register(db);
  await server.register(repositories);
  await server.register(routes);

  await server.start();

  console.log(`Server running on ${server.info.uri}`);
})();
