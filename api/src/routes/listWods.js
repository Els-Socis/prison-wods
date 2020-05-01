module.exports = {
  name: 'WODs list',
  register: (server) => {
    server.route({
      method: 'GET',
      path: '/wods',
      handler: () => {
        try {
          return server.app.repositories.wodRepository.list();
        } catch (error) {
          return error;
        }
      },
      options: {
        description: 'Get a list of Priston WODs',
        tags: ['api'],
      },
    });
  },
};
