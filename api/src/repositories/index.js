module.exports = [
  {
    name: 'Repositories init',
    register: (server) => {
      server.app.repositories = {};
    },
  },
  require('./wodRepository'),
];
