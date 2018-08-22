'use strict'

const express = require('express');
const TaskController = require('../controllers/TaskController');
const api = express.Router();

api.get('/tasks', TaskController.getTasks);
api.get('/tasks/:task_id', TaskController.getTask);
api.post('/tasks', TaskController.saveTask);
api.put('/tasks/:task_id', TaskController.updateTask);
api.delete('/tasks/:task_id', TaskController.deleteTask);

module.exports = api;