'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const task_schema = Schema({
  title: { type: String, minlength: 3, maxlength: 100, required: true },
  state: { type: String, enum: ['pendiente', 'realizado'], required: true },
  date: { type: Date, default: Date.now() },
  endDate: { type: Date },
  description: { type: String, minlength: 3, maxlength: 300, required: true },
  userTask: { type: String, lowercase: true, required: true }
});

module.exports = mongoose.model('Task', task_schema);
