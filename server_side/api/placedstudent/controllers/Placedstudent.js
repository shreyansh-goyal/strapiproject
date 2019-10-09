'use strict';

/**
 * Placedstudent.js controller
 *
 * @description: A set of functions called "actions" for managing `Placedstudent`.
 */

module.exports = {
 
  /**
   * Retrieve placedstudent records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.placedstudent.search(ctx.query);
    } else {
      return strapi.services.placedstudent.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a placedstudent record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.placedstudent.fetch(ctx.params);
  },

  /**
   * Count placedstudent records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.placedstudent.count(ctx.query);
  },

  /**
   * Create a/an placedstudent record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.placedstudent.add(ctx.request.body);
  },

  /**
   * Update a/an placedstudent record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.placedstudent.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an placedstudent record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.placedstudent.remove(ctx.params);
  },

  /**
   * Add relation to a/an placedstudent record.
   *
   * @return {Object}
   */

  createRelation: async (ctx, next) => {
    return strapi.services.placedstudent.addRelation(ctx.params, ctx.request.body);
  },

  /**
   * Update relation to a/an placedstudent record.
   *
   * @return {Object}
   */

  updateRelation: async (ctx, next) => {
    return strapi.services.placedstudent.editRelation(ctx.params, ctx.request.body);
  },

  /**
   * Destroy relation to a/an placedstudent record.
   *
   * @return {Object}
   */

  destroyRelation: async (ctx, next) => {
    return strapi.services.placedstudent.removeRelation(ctx.params, ctx.request.body);
  }
};
