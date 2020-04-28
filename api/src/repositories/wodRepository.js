module.exports = {
  name: 'Wod Repository',
  register: async (server) => {
    server.app.repositories.wodRepository = {
      get: () => server.app.db.models.wod.find().exec(),
      meh: () => server.app.db.models.wod.findAll().exec()
    };
  },
};
