const Joi = require('@hapi/joi');

module.exports = {
  name: 'WOD deletion',
  register: (server) => {
    server.route({
      method: 'DELETE',
      path: '/wods/{id}',
      handler: async (request, h) => {
        const { id: _id } = request.params;
        try {
          return h
            .response(await server.app.repositories.wodRepository.delete({ _id }))
            .code(204);
        } catch (error) {
          return error;
        }
      },
      options: {
        description: 'Deletes a WOD from the Prison WODs',
        tags: ['api'],
        validate: {
          params: Joi.object({
            id: Joi
              .string()
              .hex()
              .required()
              .example('5ea82e8cb1fc456cf7449e23'),
          }),
          failAction: (request, h, error) => error,
        },
      },
    });
  },
};
