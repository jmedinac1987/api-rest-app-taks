"use strict";

const User = require("../models/User");
const PasswordResets = require("../models/PasswordResets");
const bcrypt = require("bcrypt-nodejs");

function process(req, res) {
  let tokenDataBase = getPasswordResetTableRow(req);

  tokenDataBase
    .then(token => {
      if (!token) {
        tokenNotFoundResponse(res);
        return;
      }

      let deleteToken = deleteTokenDataBase(token._id);
      let userpasswordChnage = changePassword(req);

      deleteToken.then(result => console.log("Token Eliminado"));

      userpasswordChnage
        .then(result => {
          res
            .status(200)
            .send({ message: "Cambio de contraseña realizado con éxito" });
        })
        .catch(error => faliedResponse(res, error));
    })
    .catch(error => faliedResponse(res, error));
}

function getPasswordResetTableRow(req) {
  return PasswordResets.findOne({
    email: req.body.email,
    token: req.body.resetToken
  });
}

function tokenNotFoundResponse(res) {
  return res
    .status(404)
    .send({ message: "El correo electrónico o el token no es correcto" });
}

function faliedResponse(res, error) {
  return res
    .status(500)
    .send({ message: `Error al realizar la petición: ${error}` });
}

function changePassword(req) {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(req.body.password, salt);
  req.body.password = hash;

  return User.findOneAndUpdate({ email: req.body.email }, req.body);
}

function deleteTokenDataBase(id) {
  let pass = { _id: id };
  return PasswordResets.findOneAndDelete(pass);
}

module.exports = {
  process
};
