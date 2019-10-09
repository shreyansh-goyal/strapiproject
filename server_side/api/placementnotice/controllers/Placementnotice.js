'use strict';

/**
 * Placementnotice.js controller
 *
 * @description: A set of functions called "actions" for managing `Placementnotice`.
 */

module.exports = {

  /**
   * Retrieve placementnotice records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.placementnotice.search(ctx.query);
    } else {
      return strapi.services.placementnotice.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a placementnotice record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.placementnotice.fetch(ctx.params);
  },

  /**
   * Count placementnotice records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.placementnotice.count(ctx.query);
  },

  /**
   * Create a/an placementnotice record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.placementnotice.add(ctx.request.body);
  },

  /**
   * Update a/an placementnotice record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.placementnotice.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an placementnotice record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.placementnotice.remove(ctx.params);
  }
};
