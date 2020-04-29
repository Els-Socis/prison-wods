const Joi = require('@hapi/joi');

module.exports = {
  name: 'WOD addition',
  register: (server) => {
    server.route({
      method: 'POST',
      path: '/wods',
      handler: async (request, h) => {
        const { releaseDate, videoUrl, type, tags } = request.payload;
        try {
          return h
            .response(await server.app.repositories.wodRepository.add({ releaseDate, videoUrl, type, tags }))
            .code(201);
        } catch (error) {
          return error;
        }
      },
      options: {
        description: 'Adds a WOD to the Prison WODs',
        tags: ['api'],
        validate: {
          payload: Joi.object({
            releaseDate: Joi
              .date()
              .required()
              .example('2020-04-29'),
            videoUrl: Joi
              .string()
              .uri()
              .pattern(/^https:\/\/www\.youtube\.com\/watch\?v=\w+$/, 'WOD video url')
              .required()
              .example('https://www.youtube.com/watch?v=0swlpo075aM'),
            type: Joi
              .string()
              .valid('FT', 'RFT', 'AMRAP', 'CHIPPER', 'STATIONS')
              .optional()
              .example('RFT'),
            tags: Joi
              .array()
              .unique()
              .optional()
              .example(['emom', 'top']),
          }),
          failAction: (request, h, error) => error,
        },
      },
    });
  },
};
