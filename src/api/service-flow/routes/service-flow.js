'use strict';

/**
 * service-flow router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::service-flow.service-flow');
