/**
 * RolPorUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'db_rol_por_usuario',
  attributes: {
    idRol:{
      model: 'Rol'
    },
    idUsuario: {
      model: 'Usuario'
    }
  },
};

