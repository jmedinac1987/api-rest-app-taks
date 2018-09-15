'use strict';

const User = require('../models/User');
const PasswordResets = require('../models/PasswordResets');
const service = require('../services/index');
const mail = require('../services/mail');

function sendEmail(req, res) {
  let email = validateUser(req.body.email);
  email
    .then(user => {
      if (!user)
        return res.status(404).send({ message: 'Usuario no registrado' });
      send(user.email, res);
    })
    .catch(error => faliedResponse(res, error));
}

function send(email, res) {
  let url = '/api/reset-password';
  let urlToken = 'http://localhost:4200/response-password-reset?token=';
  let tokenDataBase = tokenDataBaseMongo(email);

  tokenDataBase
    .then(token => {
      if (token) {
        let oldToken = urlToken + token.token;

        mail
          .sendEmail(email, oldToken)
          .then(respuesta => {
            successResponse(res);
          })
          .catch(error => {
            faliedResponse(res, error);
          });

        return;
      }

      let newToken = service.createToken(email, url);
      saveToken(newToken, email);

      let sendToken = urlToken + newToken;

      mail
        .sendEmail(email, sendToken)
        .then(respuesta => {
          successResponse(res);
        })
        .catch(error => {
          faliedResponse(res, error);
        });
    })
    .catch(error => faliedResponse(res, error));
}

function tokenDataBaseMongo(email) {
  return PasswordResets.findOne({ email: email });
}

function validateUser(req) {
  return User.findOne({ email: req });
}

function saveToken(token, email) {
  const password_reset = new PasswordResets({
    email: email,
    token: token
  });
  password_reset.save();
}

function successResponse(res) {
  return res.status(200).send({
    message:
      'El correo electrónico de restablecimiento de contraseña se envió con éxito, verifique su bandeja de entrada'
  });
}

function faliedResponse(res, error) {
  return res
    .status(500)
    .send({ message: `Error al realizar la petición: ${error}` });
}

module.exports = {
  sendEmail
};