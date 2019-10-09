'use strict';

/**
 * Hostelstudent.js controller
 *
 * @description: A set of functions called "actions" for managing `Hostelstudent`.
 */

module.exports = {
 
  /**
   * Retrieve hostelstudent records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.hostelstudent.search(ctx.query);
    } else {
      return strapi.services.hostelstudent.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a hostelstudent record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.hostelstudent.fetch(ctx.params);
  },

  /**
   * Count hostelstudent records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.hostelstudent.count(ctx.query);
  },

  /**
   * Create a/an hostelstudent record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.hostelstudent.add(ctx.request.body);
  },

  /**
   * Update a/an hostelstudent record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.hostelstudent.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an hostelstudent record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.hostelstudent.remove(ctx.params);
  }
};
