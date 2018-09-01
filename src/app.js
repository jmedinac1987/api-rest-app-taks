'use strict'
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('express-handlebars');
const cors = require('cors');
const api = require('./routes/index');
const config = require('./config');
const morgan = require('morgan');

//Middlewares
app.use(cors(config.corsOptions));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//development views
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', hbs({
	defaultLayout: 'default',
	extname: '.hbs',	
    layoutsDir: path.join(__dirname, 'views/layouts')
}));//para manejo de archivos con extensión express-handelbars
app.set('view engine', '.hbs');
app.get('/login', (req, res) => {
	res.render('login');
});
app.get('/tasks', (req, res) => {
	res.render('tasks');
});

//Rutas
app.use('/api', api);

module.exports = app;