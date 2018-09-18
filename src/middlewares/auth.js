'use strict';

const services = require('../services/index');

async function isAuht(req, res, next) {
  if (!req.headers.authorization) {
    return await res.status(403).send({ message: 'No tienes autorización' });
  }

  const token = req.headers.authorization.split(' ')[1];

  await services
    .decodeToken(token)
    .then(response => {
      req.user = response;
      next();
    })
    .catch(response => {
      res.status(response.status).send({ message: response.message });
    });
}

module.exports = isAuht;
