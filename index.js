'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

//conection db and server listened
mongoose.connect(config.db, config.optionsDB, (err, res) => {
    if (err) return console.log(`Error al conectar a la base de datos ${err}`);
    console.log('Conexión a Mongodb establecida...');
    app.listen(config.port, () => {
        console.log(`API REST corriendo en el puerto ${config.port}`);
    });
});