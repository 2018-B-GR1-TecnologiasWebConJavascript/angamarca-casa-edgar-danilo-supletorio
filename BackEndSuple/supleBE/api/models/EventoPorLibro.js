/**
 * EventoPorLibro.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'db_evento_por_libro',
  attributes: {
    precioBase:{
      type: 'number',
      columnType: 'float',
      columnName: 'precio_base'
    },
    idEvento:{
      model: 'Evento'
    },
    idLibro:{
      model: 'Libro'
    },
    facturaDetalle:{
      collection: 'FacturaDetalle',
      via: 'idEventoPorLibro'
    }
  },
};

