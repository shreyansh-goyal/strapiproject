'use strict';

/**
 * Electivesubject.js controller
 *
 * @description: A set of functions called "actions" for managing `Electivesubject`.
 */

module.exports = {
 
  /**
   * Retrieve electivesubject records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.electivesubject.search(ctx.query);
    } else {
      return strapi.services.electivesubject.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a electivesubject record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.electivesubject.fetch(ctx.params);
  },

  /**
   * Count electivesubject records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.electivesubject.count(ctx.query);
  },

  /**
   * Create a/an electivesubject record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.electivesubject.add(ctx.request.body);
  },

  /**
   * Update a/an electivesubject record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.electivesubject.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an electivesubject record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.electivesubject.remove(ctx.params);
  }
};
