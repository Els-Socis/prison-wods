module.exports = {
  name: 'Wod Repository',
  register: async (server) => {
    server.app.repositories.wodRepository = {
      list: () => server.app.db.models.wod.find().exec(),
      add: (wod) => server.app.db.models.wod.create(wod),
    };
  },
};
