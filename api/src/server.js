const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');

const package = require('../package.json');

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

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: {
        info: {
          title: 'Prison Wods API',
          description: package.description,
          version: package.version,
        },
        jsonPath: '/swagger',
        documentationPath: '/docs',
      },
    },
  ]);

  await server.register(db);
  await server.register(repositories);
  await server.register(routes);

  await server.start();

  console.log(`Server running on ${server.info.uri}`);
})();
