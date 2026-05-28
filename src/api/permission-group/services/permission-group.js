'use strict';

/**
 * permission-group service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::permission-group.permission-group');
