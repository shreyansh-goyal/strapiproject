'use strict';

/**
 * Studentattendance.js controller
 *
 * @description: A set of functions called "actions" for managing `Studentattendance`.
 */

module.exports = {

  /**
   * Retrieve studentattendance records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.studentattendance.search(ctx.query);
    } else {
      return strapi.services.studentattendance.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a studentattendance record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.studentattendance.fetch(ctx.params);
  },

  /**
   * Count studentattendance records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.studentattendance.count(ctx.query);
  },

  /**
   * Create a/an studentattendance record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.studentattendance.add(ctx.request.body);
  },

  /**
   * Update a/an studentattendance record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.studentattendance.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an studentattendance record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.studentattendance.remove(ctx.params);
  },

  /**
   * Add relation to a/an studentattendance record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.studentattendance.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an studentattendance record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.studentattendance.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an studentattendance record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.studentattendance.removeRelation(ctx.params, ctx.request.body);
  }
};
