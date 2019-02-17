/**
 * FacturaCabecera.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'db_factura_cabecera',
  attributes: {
    nombre:{
      type: 'string',
      required: true,
      regex: /^[a-zA-Z\s]+$/
    },
    cedulaRuc:{
      type: 'string',
      required: true,
      columnName: 'cedula_ruc',
      custom: function (value) {
        return _.isString(value) && value.length>=10 && value.length<=13 && value.match(/[0-9]/);
      }
    },
    telefono:{
      type: 'string',
      custom: function (value) {
        return _.isString(value) && value.match(/[0-9]/);
      }
    },
    direccion:{
      type: 'string',
    },
    correoElectronico:{
      type: 'string',
      isEmail: true,
      columnName: 'correo_electronico'
    },
    fecha:{
      type: 'string',
      custom: value => Date.parse(value)
    },
    total:{
      type: 'number',
      defaultsTo: 0
    },
    tipoPago:{
      type: 'string',
      unique: true,
      required: true,
      isIn: [
        'Efectivo',
        'Tarjeta',
        'Cheque'
      ],
      columnName: 'tipo_pago'
    },
    estado:{
      type:'string',
      isIn: [
        'En compra',
        'Pagado',
      ],
      defaultsTo: 'En compra'
    },
    idEvento:{
      model: 'Evento'
    },
    idUsuario:{
      model: 'Usuario'
    },
    facturaDetalle:{
      collection: 'FacturaDetalle',
      via: 'idFacturaCabecera'
    }
  },

};

