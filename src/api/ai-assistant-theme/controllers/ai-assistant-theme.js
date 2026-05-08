'use strict';

/**
 * ai-assistant-theme controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::ai-assistant-theme.ai-assistant-theme', ({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;

    const entity = await strapi.documents('api::ai-assistant-theme.ai-assistant-theme').findOne({
      documentId: id,
      populate: { sites: true },
    });

    if (!entity) {
      return ctx.notFound();
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },
}));
