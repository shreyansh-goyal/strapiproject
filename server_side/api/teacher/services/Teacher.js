/* global Teacher */
'use strict';

/**
 * Teacher.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

// Strapi utilities.
const utils = require('strapi-hook-bookshelf/lib/utils/');

module.exports = {

  /**
   * Promise to fetch all teachers.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('teacher', params);
    // Select field to populate.
    const populate = Teacher.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Teacher.query(function(qb) {
      _.forEach(filters.where, (where, key) => {
        if (_.isArray(where.value) && where.symbol !== 'IN') {
          for (const value in where.value) {
            qb[value ? 'where' : 'orWhere'](key, where.symbol, where.value[value])
          }
        } else {
          qb.where(key, where.symbol, where.value);
        }
      });

      if (filters.sort) {
        qb.orderBy(filters.sort.key, filters.sort.order);
      }

      qb.offset(filters.start);
      qb.limit(filters.limit);
    }).fetchAll({
      withRelated: filters.populate || populate
    });
  },

  /**
   * Promise to fetch a/an teacher.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Teacher.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Teacher.forge(_.pick(params, 'id')).fetch({
      withRelated: populate
    });
  },

  /**
   * Promise to count a/an teacher.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('teacher', params);

    return Teacher.query(function(qb) {
      _.forEach(filters.where, (where, key) => {
        if (_.isArray(where.value)) {
          for (const value in where.value) {
            qb[value ? 'where' : 'orWhere'](key, where.symbol, where.value[value]);
          }
        } else {
          qb.where(key, where.symbol, where.value);
        }
      });
    }).count();
  },

  /**
   * Promise to add a/an Teacher.
   *
   * @return {Promise}
   */

  addall: async (values) => {
    // Extract values related to relational data.
    for(var i=0;i<values.length;i++){
    const relations = _.pick(values[i], Teacher.associations.map(ast => ast.alias));
    const data = _.omit(values[i], Teacher.associations.map(ast => ast.alias));
    // Create entry with no-relational data.
    const entry = await Teacher.forge(data).save();
    console.log(relations)
    const register = {
      "username": values[i].teacherName,
      "email": values[i].teacherEmail,
      "password": values[i].teacherPhone,
      "confirmed": true,
      "blocked": false,
      "teacher":entry.id
    }
    const advanced = await strapi.store({
      environment: '',
      type: 'plugin',
      name: 'users-permissions',
      key: 'advanced'
    }).get();

    if (register.unique_email && register.email) {
      const user = await strapi.plugins['users-permissions'].queries('user', 'users-permissions').findOne({ email: ctx.request.body.email });

      if (user) {
        return ctx.badRequest(null, ctx.request.admin ? [{ messages: [{ id: 'Auth.form.error.email.taken', field: ['email'] }] }] : 'Email is already taken.');
      }
    }

    if (!register.role) {
      const defaultRole = await strapi.plugins['users-permissions'].queries('role', 'users-permissions').findOne({ name:"Teacher"}, []);

      register.role = defaultRole._id || defaultRole.id;
    }

    register.provider = 'local';

    try {
      const data = await strapi.plugins['users-permissions'].services.user.add(register);

      // Send 201 `created`
      // ctx.created(data);
    } catch(error) {
      console.log(error)
      // ctx.badRequest(null, ctx.request.admin ? [{ messages: [{ id: error.message, field: error.field }] }] : error.message);
    }
    // Create relational data and return the entry.
     Teacher.updateRelations({ id: entry.id , values: relations, user:register.id });
    }
    return (values)
  },

  /**
   * Promise to add a/an teacher.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Teacher.associations.map(ast => ast.alias));
    const data = _.omit(values, Teacher.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Teacher.forge(data).save();
    console.log(relations)
    const register = {
      "username": values.teacherName,
      "email": values.teacherEmail,
      "password": values.teacherPhone,
      "confirmed": true,
      "blocked": false,
      "teacher":entry.id
    }
    const advanced = await strapi.store({
      environment: '',
      type: 'plugin',
      name: 'users-permissions',
      key: 'advanced'
    }).get();

    if (register.unique_email && register.email) {
      const user = await strapi.plugins['users-permissions'].queries('user', 'users-permissions').findOne({ email: ctx.request.body.email });

      if (user) {
        return ctx.badRequest(null, ctx.request.admin ? [{ messages: [{ id: 'Auth.form.error.email.taken', field: ['email'] }] }] : 'Email is already taken.');
      }
    }

    if (!register.role) {
      const defaultRole = await strapi.plugins['users-permissions'].queries('role', 'users-permissions').findOne({ name:"Teacher"}, []);

      register.role = defaultRole._id || defaultRole.id;
    }

    register.provider = 'local';

    try {
      const data = await strapi.plugins['users-permissions'].services.user.add(register);

      // Send 201 `created`
      // ctx.created(data);
    } catch(error) {
      console.log(error)
      // ctx.badRequest(null, ctx.request.admin ? [{ messages: [{ id: error.message, field: error.field }] }] : error.message);
    }
    // Create relational data and return the entry.
    return Teacher.updateRelations({ id: entry.id , values: relations, user:register.id });
  },

  /**
   * Promise to edit a/an teacher.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Teacher.associations.map(ast => ast.alias));
    const data = _.omit(values, Teacher.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = Teacher.forge(params).save(data);

    // Create relational data and return the entry.
    return Teacher.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an teacher.
   *
   * @return {Promise}
   */

  remove: async (params) => {
    params.values = {};
    Teacher.associations.map(association => {
      switch (association.nature) {
        case 'oneWay':
        case 'oneToOne':
        case 'manyToOne':
        case 'oneToManyMorph':
          params.values[association.alias] = null;
          break;
        case 'oneToMany':
        case 'manyToMany':
        case 'manyToManyMorph':
          params.values[association.alias] = [];
          break;
        default:
      }
    });

    await Teacher.updateRelations(params);

    return Teacher.forge(params).destroy();
  },

  /**
   * Promise to search a/an teacher.
   *
   * @return {Promise}
   */

  search: async (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('teacher', params);
    // Select field to populate.
    const populate = Teacher.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    const associations = Teacher.associations.map(x => x.alias);
    const searchText = Object.keys(Teacher._attributes)
      .filter(attribute => attribute !== Teacher.primaryKey && !associations.includes(attribute))
      .filter(attribute => ['string', 'text'].includes(Teacher._attributes[attribute].type));

    const searchNoText = Object.keys(Teacher._attributes)
      .filter(attribute => attribute !== Teacher.primaryKey && !associations.includes(attribute))
      .filter(attribute => !['string', 'text', 'boolean', 'integer', 'decimal', 'float'].includes(Teacher._attributes[attribute].type));

    const searchInt = Object.keys(Teacher._attributes)
      .filter(attribute => attribute !== Teacher.primaryKey && !associations.includes(attribute))
      .filter(attribute => ['integer', 'decimal', 'float'].includes(Teacher._attributes[attribute].type));

    const searchBool = Object.keys(Teacher._attributes)
      .filter(attribute => attribute !== Teacher.primaryKey && !associations.includes(attribute))
      .filter(attribute => ['boolean'].includes(Teacher._attributes[attribute].type));

    const query = (params._q || '').replace(/[^a-zA-Z0-9.-\s]+/g, '');

    return Teacher.query(qb => {
      // Search in columns which are not text value.
      searchNoText.forEach(attribute => {
        qb.orWhereRaw(`LOWER(${attribute}) LIKE '%${_.toLower(query)}%'`);
      });

      if (!_.isNaN(_.toNumber(query))) {
        searchInt.forEach(attribute => {
          qb.orWhereRaw(`${attribute} = ${_.toNumber(query)}`);
        });
      }

      if (query === 'true' || query === 'false') {
        searchBool.forEach(attribute => {
          qb.orWhereRaw(`${attribute} = ${_.toNumber(query === 'true')}`);
        });
      }

      // Search in columns with text using index.
      switch (Teacher.client) {
        case 'mysql':
          qb.orWhereRaw(`MATCH(${searchText.join(',')}) AGAINST(? IN BOOLEAN MODE)`, `*${query}*`);
          break;
        case 'pg': {
          const searchQuery = searchText.map(attribute =>
            _.toLower(attribute) === attribute
              ? `to_tsvector(${attribute})`
              : `to_tsvector('${attribute}')`
          );

          qb.orWhereRaw(`${searchQuery.join(' || ')} @@ to_tsquery(?)`, query);
          break;
        }
      }

      if (filters.sort) {
        qb.orderBy(filters.sort.key, filters.sort.order);
      }

      if (filters.skip) {
        qb.offset(_.toNumber(filters.skip));
      }

      if (filters.limit) {
        qb.limit(_.toNumber(filters.limit));
      }
    }).fetchAll({
      width: populate
    });
  }
};
