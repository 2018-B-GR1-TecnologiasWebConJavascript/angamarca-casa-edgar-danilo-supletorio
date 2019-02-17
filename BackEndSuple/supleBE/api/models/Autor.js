/**
 * Autor.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'db_autor',
  attributes: {
    nombres:{
      type: 'string',
      required: true,
      regex: /^[a-zA-Z\s]+$/
    },
    apellidos:{
      type: 'string',
      required: true,
      regex: /^[a-zA-Z\s]+$/
    },
    fechaNacimiento:{
      type: 'string',
      required: true,
      columnName: 'fecha_nacimiento',
      custom: function (value) {
        var fecha = new Date(value);
        var actual = new Date();
        if(!Date.parse(value))
          return false;
        if(fecha < actual)
          return true;
        else
          return false;
      }
    },
    numeroLibros:{
      type: 'number',
      columnType: 'int',
      min: 0,
      defaultsTo: 0,
      columnName: 'numero_libros'
    },
    ecuatoriano:{
      type: 'boolean',
      defaultsTo: true,
    },
    idUsuario: {
      model: 'Usuario'
    },
    libros:{
      collection: 'Libro',
      via: 'idAutor'
    },
  },

};

