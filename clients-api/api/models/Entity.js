/**
 * Entity.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'entities',
  attributes: {
    id: {
      type: 'number',
      columnName: 'entity_id',
      autoIncrement: true,
    },
    nit: {
      type: 'string',
      columnName: 'nit',
    },
    name: {
      type: 'string',
      columnName: 'name',
    },
    description: {
      type: 'string',
      columnName: 'description',
    },
    phone: {
      type: 'string',
      columnName: 'phone',
    },
    creditCards: {
      collection: 'creditCard',
      via: 'entity'
    }
  },
  beforeCreate: function (valuesToSet, proceed) {
    valuesToSet.createdAt = new Date();
    valuesToSet.updatedAt = new Date();
    return proceed();
  }
};

