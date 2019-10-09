'use strict';

/**
 * Studentattendanceconsolidated.js controller
 *
 * @description: A set of functions called "actions" for managing `Studentattendanceconsolidated`.
 */

module.exports = {

  /**
   * Retrieve studentattendanceconsolidated records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.studentattendanceconsolidated.search(ctx.query);
    } else {
      return strapi.services.studentattendanceconsolidated.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a studentattendanceconsolidated record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.studentattendanceconsolidated.fetch(ctx.params);
  },

  /**
   * Count studentattendanceconsolidated records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.studentattendanceconsolidated.count(ctx.query);
  },

  /**
   * Create a/an studentattendanceconsolidated record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.studentattendanceconsolidated.add(ctx.request.body);
  },

  /**
   * Update a/an studentattendanceconsolidated record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.studentattendanceconsolidated.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an studentattendanceconsolidated record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.studentattendanceconsolidated.remove(ctx.params);
  },

  /**
   * Add relation to a/an studentattendanceconsolidated record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.studentattendanceconsolidated.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an studentattendanceconsolidated record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.studentattendanceconsolidated.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an studentattendanceconsolidated record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.studentattendanceconsolidated.removeRelation(ctx.params, ctx.request.body);
  }
};
