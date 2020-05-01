module.exports = [
  {
    name: 'DB Init',
    register: (server) => {
      server.app.db = {};
    },
  },
  require('./connection'),
  require('./models'),
];
