'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

const user_schema = Schema({
	email: {type: String, unique: true, lowercase: true},
	displayName: {type: String, min: 3},
	avatar: String,
	password: {type: String},//select: false, evitamos que cuando se haga get del usuario la contrasea no sea enviada
	signUpDate: {type: Date, default: Date.now()},
	lastLogin: Date
});

user_schema.pre('save', function(next) {
	let user = this;
	if (!user.isModified('password')) return next();

	bcrypt.genSalt(10, (err, salt) =>{
		if(err) return next();

		bcrypt.hash(user.password, salt, null, (err, hash) =>{
			if(err) return next(err);

			user.password = hash;
			next();
		});
	});
});

user_schema.methods.gravatar = () => {
	if(!this.email) return 'https://gravatar.com/avatar/?s=200&d=retro';

	const md5 = crypto.createHash('md5').update(this.email).digest('hex');

	return `https://gravatar.com/avatar/${md5}?s=200&d=retro`
}

module.exports = mongoose.model('User', user_schema);