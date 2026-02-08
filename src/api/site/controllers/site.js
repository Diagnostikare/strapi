'use strict';

/**
 * site controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::site.site', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        themes: {
          populate: {
            logo: true,
            primary_button: true,
            secondary_bottom: true,
            tertiary_button: true,
            cta_button: true,
            dangerous_button: true,
            outline_button: true,
            disabled_button: true,
            input_default: true,
            input_active: true,
            input_error: true,
            input_disabled: true,
            header: {
              populate: '*',
            },
            splash: {
              populate: '*',
            },
            wizard: {
              populate: '*',
            }
          },
        },
      },
    };

    return await super.find(ctx);
  },
}));
