'use strict';

const User = require('../models/User');
const bcrypt = require('bcrypt-nodejs');
const service = require('../services/');

function signUp(req, res) {
  const user = new User({
    email: req.body.email,
    displayName: req.body.displayName,
    password: req.body.password,
    lastLogin: Date.now()
  });

  user.save(err => {
    if (err)
      return res
        .status(500)
        .send({ message: `Error al crear el usuario ${err}` });

    return res
      .status(200)
      .send({ token: service.createToken(user, req.originalUrl) });
  });
}

function signIn(req, res) {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user)
        return res.status(404).send({ message: 'Usuario no registrado' });

      const password_verification = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (password_verification) {
        let cahngeLastSignIn = changelastLogin(req.body.email);
        cahngeLastSignIn.then(response => console.log('Last login'));        
        res.status(200).send({
          message: 'Te has logueado correctamente',
          token: service.createToken(user, req.originalUrl)
        });
      } else {
        res.status(500).send({ message: 'Email o Contraseña incorrectos' });
      }
    })
    .catch(err => {
      return res
        .status(500)
        .send({ message: `Error al realizar la petición ${err}` });
    });
}

function changelastLogin(email) {
  let dateLogin = {
    lastLogin: Date.now()
  };
  return User.findOneAndUpdate({ email: email }, dateLogin);
}

function closeAcount(req, res){
  User.findOneAndDelete({ email: req.user })
    .then(user => {
      if (!user) notFound(res);
      successResponse(res, 'Cuenta cerrada con exito éxito');
    })
    .catch(error => faliedResponse(res, error));
}

function successResponse(res, message) {    
  return res.status(200).send({ message });
}

function faliedResponse(res, error) {
  return res
    .status(500)
    .send({ message: `Error al realizar la petición: ${error}` });
}

function notFound(res) {
  return res.status(404).send({ message: 'Usuario no encontrado' });
}

module.exports = {
  signUp,
  signIn,
  closeAcount
};
