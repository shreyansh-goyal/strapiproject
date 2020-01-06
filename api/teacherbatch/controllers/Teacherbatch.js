'use strict';

/**
 * Teacherbatch.js controller
 *
 * @description: A set of functions called "actions" for managing `Teacherbatch`.
 */

module.exports = {

  /**
   * Retrieve teacherbatch records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.teacherbatch.search(ctx.query);
    } else {
      return strapi.services.teacherbatch.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a teacherbatch record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.teacherbatch.fetch(ctx.params);
  },

  /**
   * Count teacherbatch records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.teacherbatch.count(ctx.query);
  },

  /**
   * Create a/an teacherbatch record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.teacherbatch.add(ctx.request.body);
  },

  /**
   * Update a/an teacherbatch record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.teacherbatch.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an teacherbatch record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.teacherbatch.remove(ctx.params);
  }
};
