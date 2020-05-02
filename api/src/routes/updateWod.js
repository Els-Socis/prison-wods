const Joi = require('@hapi/joi');

module.exports = {
  name: 'WOD update',
  register: (server) => {
    server.route({
      method: 'PUT',
      path: '/wods/{id}',
      handler: async (request, h) => {
        const { id: _id } = request.params;
        const { releaseDate, videoUrl, rating, type, tags, completionDate } = request.payload;
        try {
          return h
            .response(await server.app.repositories.wodRepository.update({
              _id, releaseDate, videoUrl, rating, type, tags, completionDate,
             }))
            .code(204);
        } catch (error) {
          return error;
        }
      },
      options: {
        description: 'Updates a WOD in the Prison WODs',
        tags: ['api'],
        validate: {
          params: Joi.object({
            id: Joi
              .string()
              .hex()
              .required()
              .example('5ea82e8cb1fc456cf7449e23'),
          }),
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
            rating: Joi
              .number()
              .optional()
              .example('8.5'),
            type: Joi
              .string()
              .valid('FT', 'RFT', 'AMRAP', 'EMOM', 'DEATH BY', 'CHIPPER', 'STATIONS')
              .optional()
              .example('RFT'),
            tags: Joi
              .array()
              .unique()
              .optional()
              .example(['emom', 'top']),
            completionDate: Joi
              .date()
              .min(Joi.ref('releaseDate'))
              .example('2020-04-29'),
          }),
          failAction: (request, h, error) => error,
        },
      },
    });
  },
};
