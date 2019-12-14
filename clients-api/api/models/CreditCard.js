/**
 * CreditCard.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'credit_cards',
  attributes: {
    id: {
      type: 'number',
      columnName: 'credit_card_id',
      autoIncrement: true,
    },
    pan: {
      type: 'string',
      columnName: 'pan',
    },
    expirationDate: {
      type: 'string',
      columnName: 'expiration_date',
    },
    cvv: {
      type: 'string',
      columnName: 'cvv',
    },
    brand: {
      type: 'string',
      columnName: 'brand',
    },
    user: {
      model: 'user',
      columnName: 'user_id'
    },
    entity: {
      model: 'entity',
      columnName: 'entity_id'
    },
    
  },
  beforeCreate: function (valuesToSet, proceed) {
    valuesToSet.createdAt = new Date();
    valuesToSet.updatedAt = new Date();
    valuesToSet.expirationDate = new Date( valuesToSet.expirationDate );
    return proceed();
  }
};

