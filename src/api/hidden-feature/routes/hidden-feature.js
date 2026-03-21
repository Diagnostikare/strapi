'use strict';

/**
 * hidden-feature router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hidden-feature.hidden-feature');
