const mongoose = require('mongoose');

module.exports = {
  name: 'DB Connection',
  register: async (server) => {
    try {
      await mongoose.connect('mongodb://db:27017/prisonWods', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      console.log('Some error occurred when trying to connect to DB', error);
    }

    server.app.db.connection = mongoose.connection;
  },
};
