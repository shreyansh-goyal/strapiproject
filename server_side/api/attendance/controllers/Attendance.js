'use strict';

/**
 * Attendance.js controller
 *
 * @description: A set of functions called "actions" for managing `Attendance`.
 */

module.exports = {

  /**
   * Retrieve attendance records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.attendance.search(ctx.query);
    } else {
      return strapi.services.attendance.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a attendance record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.attendance.fetch(ctx.params);
  },

  /**
   * Count attendance records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.attendance.count(ctx.query);
  },

  /**
   * Create a/an attendance record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.attendance.add(ctx.request.body);
  },

    /**
   * Create a/an attendance record.
   *
   * @return {Array}
   */

  createall: async (ctx) => {
    return strapi.services.attendance.addall(ctx.request.body);
  },

  /**
   * Update a/an attendance record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.attendance.edit(ctx.params, ctx.request.body) ;
  },

  updateall: async (ctx, next) => {
    return strapi.services.attendance.editall(ctx.params, ctx.request.body) ;
  },


  /**
   * Destroy a/an attendance record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.attendance.remove(ctx.params);
  },

  /**
   * Add relation to a/an attendance record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.attendance.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an attendance record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.attendance.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an attendance record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.attendance.removeRelation(ctx.params, ctx.request.body);
  }
};
