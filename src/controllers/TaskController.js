'use strict';
const Task = require('../models/Task');

async function getTasks(req, res) {
  await Task.find({ userTask: req.user })
    .then(tasks => {
      if (!tasks) notFound(res);
      successResponse(res, tasks, null);
    })
    .catch(error => faliedResponse(res, error));
}

async function getTasksPending(req, res) {
  await Task.find({ userTask: req.user, state: 'pendiente' })
    .then(tasks => {
      if (!tasks) notFound(res);
      successResponse(res, tasks, null);
    })
    .catch(error => faliedResponse(res, error));
}

async function getTask(req, res) {
  await Task.findOne({ _id: req.params.task_id, userTask: req.user })
    .then(task => {
      if (!task) notFound(res);
      successResponse(res, task, null);
    })
    .catch(error => faliedResponse(res, error));
}

async function saveTask(req, res) {  
  let task = new Task();
  task.title = req.body.title;
  task.state = req.body.state;
  task.description = req.body.description;
  task.endDate = req.body.endDate;
  task.userTask = req.user;

  await task
    .save()
    .then(task => {
      successResponse(res, null, 'Tarea almacenada con éxito');
    })
    .catch(error => faliedResponse(res, error));
}

async function updateTask(req, res) {  
  await Task.findOneAndUpdate(
    { _id: req.params.task_id, userTask: req.user },
    req.body
  )
    .then(task => {
      if (!task) notFound(res);
      successResponse(res, null, 'Tarea actualizada con éxito');
    })
    .catch(error => faliedResponse(res, error));
}

async function deleteTask(req, res) {
  await Task.findOneAndDelete({ _id: req.params.task_id, userTask: req.user })
    .then(task => {
      if (!task) notFound(res);
      successResponse(res, null, 'Tarea eliminada con éxito');
    })
    .catch(error => faliedResponse(res, error));
}

function successResponse(res, tasks, message) {  
  if (!message) return res.status(200).send({ tasks });
  return res.status(200).send({ message });
}

function faliedResponse(res, error) {
  return res
    .status(500)
    .send({ message: `Error al realizar la petición: ${error}` });
}

function notFound(res) {
  return res.status(404).send({ message: 'Tarea(s) no encontrada(s)' });
}

module.exports = {
  getTasks,
  getTasksPending,
  getTask,
  saveTask,
  updateTask,
  deleteTask
};