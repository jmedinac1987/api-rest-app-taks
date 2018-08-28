"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const task_schema = Schema({
  title: { type: String, min: 3 },
  state: { type: String, enum: ["pendiente", "realizado"] },
  date: { type: Date, default: Date.now() },
  description: { type: String, min: 3 },
  userTask: { type: String, lowercase: true }
});

module.exports = mongoose.model("Task", task_schema);
