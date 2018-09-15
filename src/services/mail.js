'use strict';

const nodemailer = require('nodemailer');
const config = require('../config');
const mail = {};

mail.sendEmail = async (email, token) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.email,
      pass: config.key
    }
  });

  let mail_options = {
    from: 'do_not_reply <website@heroku.com>',
    to: config.email,
    subject: 'Restablecimiento de password para AppTasks',
    text:
      'Le hemos enviado un nuevo token de seguridad porque recientemente solicitó restablecer su password de seguridad. \n Haga clic en el enlace de abajo para cambiar el password.\n' +
      token,
    html:
      '<p>Le hemos enviado un nuevo token de seguridad porque recientemente solicitó restablecer su password de seguridad para el usuario ' +
      email +
      '.<br/><br/> Haga clic en el enlace de abajo para cambiar el password.</p><br/>' +
      '<ul><li>Token: ' +
      '<a href=' +
      token +
      '>Cambio de password</a>' +
      '</li></ul>'
  };

  return await transporter.sendMail(mail_options);
};

module.exports = mail;