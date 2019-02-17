/**
 * FacturaDetalle.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'db_factura_detalle',
  attributes: {
    catidad:{
      type: 'number',
      columnType: 'int',
      min: 0,
      required: true
    },
    precio:{
      type: 'number',
      columnType: 'float',
      min: 0,
      required: true
    },
    total:{
      type: 'number',
      columnType: 'float',
      min: 0,
      required: true
    },
    idFacturaCabecera:{
      model: 'FacturaCabecera'
    },
    idEventoPorLibro:{
      model: 'EventoPorLibro'
    }
  },

};

