'use strict'
const Task = require('../models/Task');

function getTasks(req, res) {
    Task.find(async (err, tasks) => {
        if (err) return await res.status(500).send({
            message: `Error al realizar la petición ${err}`
        });
        if (!tasks) return await res.status(404).send({
            message: 'No hay tareas..'
        });
        await res.status(200).send({
            Tareas: tasks
        });
    });
}

function getTask(req, res) {
    let task_id = {
        _id: req.params.task_id
    };
    Task.findOne(task_id, async (err, task) => {
        if (err) return await res.status(500).send({
            message: `Error al realizar la petición ${err}`
        });
        if (!task) return await res.status(404).send({
            message: 'Tarea no encontrada'
        });
        await res.status(200).send({
            Tarea: task
        });
    });
}

function saveTask(req, res) {
    let task = new Task(req.body);
    task.save(async (err, taskStored) => {
        if (err) return await res.status(500).send({
            message: `Error al salvar la tarea ${err}`
        });
        await res.status(200).send({
            Tarea: taskStored
        });
    });
}

function updateTask(req, res) {
    let task_id = {
        _id: req.params.task_id
    };
    let task_update = req.body;
    Task.findOneAndUpdate(task_id, task_update, async (err, task) => {
        if (err) return await res.status(500).send({
            message: `Error al realizar la petición ${err}`
        });
        if (!task) return await res.status(404).send({
            message: 'Tarea no encontrada'
        });
        await res.status(200).send({
            message: 'Tarea actualizada con éxito'
        });
    });
}

function deleteTask(req, res) {
    let task_id = {
        _id: req.params.task_id
    };
    Task.findOneAndDelete(task_id, async (err, task) => {
        if (err) return await res.status(500).send({
            message: `Error al realizar la petición ${err}`
        });
        if (!task) return await res.status(404).send({
            message: 'Tarea no encontrada'
        });
        await res.status(200).send({
            message: 'Tarea eliminada con éxito'
        });
    });
}

module.exports = {
    getTasks,
    getTask,
    saveTask,
    updateTask,
    deleteTask
}