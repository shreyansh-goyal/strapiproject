'use strict';

/**
 * Studentlogin.js controller
 *
 * @description: A set of functions called "actions" for managing `Studentlogin`.
 */

module.exports = {

  /**
   * Retrieve studentlogin records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.studentlogin.search(ctx.query);
    } else {
      return strapi.services.studentlogin.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a studentlogin record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.studentlogin.fetch(ctx.params);
  },

  /**
   * Count studentlogin records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.studentlogin.count(ctx.query);
  },

  /**
   * Create a/an studentlogin record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.studentlogin.add(ctx.request.body);
  },

  /**
   * Update a/an studentlogin record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.studentlogin.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an studentlogin record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.studentlogin.remove(ctx.params);
  }
};
