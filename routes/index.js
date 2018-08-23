'use strict'

const express = require('express');
const TaskController = require('../controllers/TaskController');
const UserController = require('../controllers/UserController');
const api = express.Router();
const auth = require('../middlewares/auth');

//routes Tasks
api.get('/tasks', auth, TaskController.getTasks);
api.get('/tasks/:task_id', auth, TaskController.getTask);
api.post('/tasks', auth, TaskController.saveTask);
api.put('/tasks/:task_id', auth, TaskController.updateTask);
api.delete('/tasks/:task_id', auth, TaskController.deleteTask);

//routes Users
api.post('/signup', UserController.signUp);
api.post('/signin', UserController.signIn);

api.get('/private', auth, (req, res) => {
	res.status(200).send({message: 'Tienes acceso'});
})//ruta de prueba para token

module.exports = api;