/**
 * Rol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'db_rol',
  attributes: {
    nombre:{
      type: 'string',
      regex: /^[a-zA-Z\s]+$/,
      unique: true,
      required: true,
      isIn: [
        'Administrador',
        'Usuario',
        'Cliente',
        'Cajero'
      ]
    },
    rolUsuario:{
      collection: 'RolPorUsuario',
      via: 'idRol'
    }
  },

};

