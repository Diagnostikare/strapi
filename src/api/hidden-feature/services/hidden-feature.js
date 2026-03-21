'use strict';

/**
 * hidden-feature service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hidden-feature.hidden-feature');
