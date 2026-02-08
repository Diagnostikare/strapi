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
            primaryButton: true,
            secondaryButton: true,
            tertiaryButton: true,
            ctaButton: true,
            dangerButton: true,
            outlineButton: true,
            disabledButton: true,
            defaultInput: true,
            focusInput: true,
            errorInput: true,
            disabledInput: true,
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
