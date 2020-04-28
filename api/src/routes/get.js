module.exports = {
  name: 'WODs list',
  register: (server) => {
    server.route({
      method: 'GET',
      path: '/wods',
      handler: () => {
        return server.app.repositories.wodRepository.get();
      },
      options: {
        description: 'Get a list of Priston WODs',
        tags: ['api'],
      },
    });
  },
};
