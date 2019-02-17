/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  login: async (req, res) => {
    const parametros = req.allParams();
    var validarEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!validarEmail.test(parametros.correo))
      return res.badRequest({mensaje:'Usuario Invalido, ingrese un correo valido'});
    const usuarioLogeado = await Usuario.find({
      correo: parametros.correo,
      password: parametros.password,
    });
    if(usuarioLogeado){
      return res.ok(usuarioLogeado);
    }else{
      return res.badRequest({mensaje:'Error'});
    }
  }
};

