'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const task_schema = Schema({
	title: {type: String, min: 3},
	state: {type: String, enum: ['pendiente', 'realizado']},
	date: {type: Date},
	description: {type: String, min: 3}
});

module.exports = mongoose.model('Task', task_schema);