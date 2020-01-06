'use strict';

/**
 * Teacher.js controller
 *
 * @description: A set of functions called "actions" for managing `Teacher`.
 */

module.exports = {

  /**
   * Retrieve teacher records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.teacher.search(ctx.query);
    } else {
      return strapi.services.teacher.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a teacher record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.teacher.fetch(ctx.params);
  },

  /**
   * Count teacher records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.teacher.count(ctx.query);
  },

  /**
   * Create a/an teacher record.
   *
   * @return {Object}
   */

  createall: async (ctx) => {
    return strapi.services.teacher.addall(ctx.request.body);
  },

  /**
   * Create a/an teacher record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.teacher.add(ctx.request.body);
  },

  /**
   * Update a/an teacher record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.teacher.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an teacher record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.teacher.remove(ctx.params);
  }
};
