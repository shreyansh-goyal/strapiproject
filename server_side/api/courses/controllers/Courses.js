'use strict';

/**
 * Courses.js controller
 *
 * @description: A set of functions called "actions" for managing `Courses`.
 */

module.exports = {

  /**
   * Retrieve courses records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.courses.search(ctx.query);
    } else {
      return strapi.services.courses.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a courses record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.courses.fetch(ctx.params);
  },

  /**
   * Count courses records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.courses.count(ctx.query);
  },

  /**
   * Create a/an courses record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.courses.add(ctx.request.body);
  },

  /**
   * Update a/an courses record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.courses.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an courses record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.courses.remove(ctx.params);
  }
};
