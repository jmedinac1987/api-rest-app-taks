'use strict'
const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const api = require('./routes/');

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//views develoment
app.engine('.hbs', hbs({
	defaultLayout: 'default',
	extname: '.hbs' 
}));//para manejo de archivos express-handelbars
app.set('view engine', '.hbs');
app.get('/login', (req, res) => {
	res.render('login')
});
app.get('/tasks', (req, res) => {
	res.render('tasks')
});

//Rutas
app.use('/api', api);

module.exports = app;