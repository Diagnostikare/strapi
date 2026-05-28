'use strict';

/**
 * general-permission service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::general-permission.general-permission');
