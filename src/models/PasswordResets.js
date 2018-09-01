"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const password_resets_schema = Schema({
  email: { type: String, min: 3 },
  token: { type: String, min: 3},
  created_at: { type: Date, default: Date.now() }  
});

module.exports = mongoose.model("PasswordResets", password_resets_schema);
