'use strict';

/**
 * Studentresumedetails.js controller
 *
 * @description: A set of functions called "actions" for managing `Studentresumedetails`.
 */

module.exports = {

  /**
   * Retrieve studentresumedetails records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.studentresumedetails.search(ctx.query);
    } else {
      return strapi.services.studentresumedetails.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a studentresumedetails record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.studentresumedetails.fetch(ctx.params);
  },

  /**
   * Count studentresumedetails records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.studentresumedetails.count(ctx.query);
  },

  /**
   * Create a/an studentresumedetails record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.studentresumedetails.add(ctx.request.body);
  },

  /**
   * Update a/an studentresumedetails record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.studentresumedetails.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an studentresumedetails record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.studentresumedetails.remove(ctx.params);
  }
};
