module.exports = {
  name: 'WODs list',
  register: (server) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: () => {
        return server.app.repositories.wodRepository.get();
      },
    });
  },
};
