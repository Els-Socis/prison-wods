module.exports = {
  name: 'Wod Repository',
  register: async (server) => {
    server.app.repositories.wodRepository = {
      list: () => server.app.db.models.wod.find().exec(),
    };
  },
};
