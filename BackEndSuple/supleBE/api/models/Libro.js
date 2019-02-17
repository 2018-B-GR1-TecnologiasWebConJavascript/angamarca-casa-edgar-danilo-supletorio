/**
 * Libro.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  tableName: 'db_libro',
  attributes: {
    nombre:{
      type: 'string',
      required: true,
      regex: /^[a-zA-Z\s]+$/,
      unique: true
    },
    numeroPaginas:{
      type: 'number',
      columnType: 'int',
      min: 0,
      defaultsTo: 0,
      columnName: 'numero_paginas'
    },
    edicion:{
      type: 'number',
      columnType: 'int',
      min: 0,
      defaultsTo: 1
    },
    fechaPublicacion:{
      type: 'string',
      custom: value => Date.parse(value),
      columnName: 'fecha_publicacion'
    },
    nombreEditorial:{
      type: 'string',
      columnName: 'nombre_editorial'
    },
    idAutor:{
      model: 'Autor'
    },
    eventoLibro:{
      collection: 'EventoPorLibro',
      via: 'idLibro'
    }
  },

};

