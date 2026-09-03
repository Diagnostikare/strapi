'use strict';

/**
 * mi-salud-theme controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::mi-salud-theme.mi-salud-theme', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.documents('api::mi-salud-theme.mi-salud-theme').findOne({
      documentId: id,
      populate: {
        sites: true,
        dashboard: { populate: { miSaludBanner: { populate: { button: true } } } },
        healthStatus: true,
      },
    });

    if (!entity) {
      return ctx.notFound();
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
