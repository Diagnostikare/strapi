'use strict';

/**
 * extra-terms service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::extra-term.extra-term');
