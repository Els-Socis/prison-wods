const mongoose = require('mongoose');

const schemas = {
  wod: {
    releaseDate: {
      type: Date,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    rating: mongoose.Schema.Types.Decimal128,
    type: {
      type: String,
      enum: ['FT', 'RFT', 'AMRAP', 'CHIPPER', 'STATIONS'],
    },
    tags: [String],
    completionDate: Date,
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
};

module.exports = {
  name: 'DB Models',
  register: async (server) => {
    server.app.db.models = Object.entries(schemas).reduce(
      (models, [name, structure]) => ({
        ...models,
        [name]: mongoose.model(name, new mongoose.Schema(structure))
      }),
      {},
    );
  },
};
