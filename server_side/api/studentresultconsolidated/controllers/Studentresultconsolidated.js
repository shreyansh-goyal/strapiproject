'use strict';

/**
 * Studentresultconsolidated.js controller
 *
 * @description: A set of functions called "actions" for managing `Studentresultconsolidated`.
 */

module.exports = {

  /**
   * Retrieve studentresultconsolidated records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.studentresultconsolidated.search(ctx.query);
    } else {
      return strapi.services.studentresultconsolidated.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a studentresultconsolidated record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.studentresultconsolidated.fetch(ctx.params);
  },

  /**
   * Count studentresultconsolidated records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.studentresultconsolidated.count(ctx.query);
  },

  /**
   * Create a/an studentresultconsolidated record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.studentresultconsolidated.add(ctx.request.body);
  },

  /**
   * Update a/an studentresultconsolidated record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.studentresultconsolidated.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an studentresultconsolidated record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.studentresultconsolidated.remove(ctx.params);
  }
};
