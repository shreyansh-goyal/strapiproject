'use strict';

/**
 * Studentdrive.js controller
 *
 * @description: A set of functions called "actions" for managing `Studentdrive`.
 */

module.exports = {

  /**
   * Retrieve studentdrive records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.studentdrive.search(ctx.query);
    } else {
      return strapi.services.studentdrive.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a studentdrive record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.studentdrive.fetch(ctx.params);
  },

  /**
   * Count studentdrive records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.studentdrive.count(ctx.query);
  },

  /**
   * Create a/an studentdrive record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.studentdrive.add(ctx.request.body);
  },

  /**
   * Update a/an studentdrive record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.studentdrive.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an studentdrive record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.studentdrive.remove(ctx.params);
  },

  /**
   * Add relation to a/an studentdrive record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.studentdrive.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an studentdrive record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.studentdrive.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an studentdrive record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.studentdrive.removeRelation(ctx.params, ctx.request.body);
  }
};
