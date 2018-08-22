'use strict'
const express = require('express');
const app = express();
const api = require('./routes/');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use('/api', api);

module.exports = app;