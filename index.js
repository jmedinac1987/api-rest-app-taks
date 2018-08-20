'use strict'
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.get('/hola/:name', (req, res) => {
	res.send({message: `Hola ${req.params.name}`});
});

app.listen(port, () => {
    console.log(`API REST corriendo en el puerto ${port}`);
});

