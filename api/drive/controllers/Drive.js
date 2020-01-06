'use strict';

/**
 * Drive.js controller
 *
 * @description: A set of functions called "actions" for managing `Drive`.
 */

module.exports = {

  /**
   * Retrieve drive records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.drive.search(ctx.query);
    } else {
      return strapi.services.drive.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a drive record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.drive.fetch(ctx.params);
  },

  /**
   * Count drive records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.drive.count(ctx.query);
  },

  /**
   * Create a/an drive record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.drive.add(ctx.request.body);
  },

  /**
   * Update a/an drive record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.drive.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an drive record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.drive.remove(ctx.params);
  },

  /**
   * Add relation to a/an drive record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.drive.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an drive record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.drive.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an drive record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.drive.removeRelation(ctx.params, ctx.request.body);
  }
};
