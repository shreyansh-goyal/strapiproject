/* global Student */
'use strict';

/**
 * Student.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

// Public dependencies.
const _ = require('lodash');

// Strapi utilities.
const utils = require('strapi-hook-bookshelf/lib/utils/');

module.exports = {

  /**
   * Promise to fetch all students.
   *
   * @return {Promise}
   */

  fetchAll: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('student', params);
    // Select field to populate.
    const populate = Student.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Student.query(function(qb) {
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
   * Promise to fetch a/an student.
   *
   * @return {Promise}
   */

  fetch: (params) => {
    // Select field to populate.
    const populate = Student.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    return Student.forge(_.pick(params, 'id')).fetch({
      withRelated: populate
    });
  },

  /**
   * Promise to count a/an student.
   *
   * @return {Promise}
   */

  count: (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('student', params);

    return Student.query(function(qb) {
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
   * Promise to add a/an attendance.
   *
   * @return {Promise}
   */

  addall: async (values) => {
    // Extract values related to relational data.
    for(var i=0;i<values.length;i++){
    const relations = _.pick(values[i], Student.associations.map(ast => ast.alias));
    const data = _.omit(values[i], Student.associations.map(ast => ast.alias));
    // Create entry with no-relational data.
    const entry = await Student.forge(data).save();
    console.log(relations)
    const register = {
      "username": values[i].enrollmentNo,
      "email": values[i].emailId,
      "password": values[i].enrollmentNo,
      "confirmed": true,
      "blocked": false,
      "student":entry.id
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
      const defaultRole = await strapi.plugins['users-permissions'].queries('role', 'users-permissions').findOne({ type: advanced.default_role }, []);

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
   Student.updateRelations({ id: entry.id , values: relations, user:register.id });
    }
    return (values)
  },

  /**
   * Promise to add a/an student.
   *
   * @return {Promise}
   */

  add: async (values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Student.associations.map(ast => ast.alias));
    const data = _.omit(values, Student.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = await Student.forge(data).save();
    console.log(relations)
    const register = {
      "username": values.enrollmentNo,
      "email": values.emailId,
      "password": values.enrollmentNo,
      "confirmed": true,
      "blocked": false,
      "student":entry.id
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
      const defaultRole = await strapi.plugins['users-permissions'].queries('role', 'users-permissions').findOne({ type: advanced.default_role }, []);

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
    return Student.updateRelations({ id: entry.id , values: relations, user:register.id });
  },

  /**
   * Promise to edit a/an student.
   *
   * @return {Promise}
   */

  edit: async (params, values) => {
    // Extract values related to relational data.
    const relations = _.pick(values, Student.associations.map(ast => ast.alias));
    const data = _.omit(values, Student.associations.map(ast => ast.alias));

    // Create entry with no-relational data.
    const entry = Student.forge(params).save(data);

    // Create relational data and return the entry.
    return Student.updateRelations(Object.assign(params, { values: relations }));
  },

  /**
   * Promise to remove a/an student.
   *
   * @return {Promise}
   */

  remove: async (params) => {
    params.values = {};
    Student.associations.map(association => {
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

    await Student.updateRelations(params);

    return Student.forge(params).destroy();
  },

  /**
   * Promise to search a/an student.
   *
   * @return {Promise}
   */

  search: async (params) => {
    // Convert `params` object to filters compatible with Bookshelf.
    const filters = strapi.utils.models.convertParams('student', params);
    // Select field to populate.
    const populate = Student.associations
      .filter(ast => ast.autoPopulate !== false)
      .map(ast => ast.alias);

    const associations = Student.associations.map(x => x.alias);
    const searchText = Object.keys(Student._attributes)
      .filter(attribute => attribute !== Student.primaryKey && !associations.includes(attribute))
      .filter(attribute => ['string', 'text'].includes(Student._attributes[attribute].type));

    const searchNoText = Object.keys(Student._attributes)
      .filter(attribute => attribute !== Student.primaryKey && !associations.includes(attribute))
      .filter(attribute => !['string', 'text', 'boolean', 'integer', 'decimal', 'float'].includes(Student._attributes[attribute].type));

    const searchInt = Object.keys(Student._attributes)
      .filter(attribute => attribute !== Student.primaryKey && !associations.includes(attribute))
      .filter(attribute => ['integer', 'decimal', 'float'].includes(Student._attributes[attribute].type));

    const searchBool = Object.keys(Student._attributes)
      .filter(attribute => attribute !== Student.primaryKey && !associations.includes(attribute))
      .filter(attribute => ['boolean'].includes(Student._attributes[attribute].type));

    const query = (params._q || '').replace(/[^a-zA-Z0-9.-\s]+/g, '');

    return Student.query(qb => {
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
      switch (Student.client) {
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
