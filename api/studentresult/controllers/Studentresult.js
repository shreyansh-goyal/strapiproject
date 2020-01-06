'use strict';

/**
 * Studentresult.js controller
 *
 * @description: A set of functions called "actions" for managing `Studentresult`.
 */

module.exports = {

  /**
   * Retrieve studentresult records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.studentresult.search(ctx.query);
    } else {
      return strapi.services.studentresult.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a studentresult record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.studentresult.fetch(ctx.params);
  },

  /**
   * Count studentresult records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.studentresult.count(ctx.query);
  },

  /**
   * Create a/an studentresult record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.studentresult.add(ctx.request.body);
  },

  /**
   * Update a/an studentresult record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.studentresult.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an studentresult record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.studentresult.remove(ctx.params);
  },

  /**
   * Add relation to a/an studentresult record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.studentresult.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an studentresult record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.studentresult.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an studentresult record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.studentresult.removeRelation(ctx.params, ctx.request.body);
  }
};
