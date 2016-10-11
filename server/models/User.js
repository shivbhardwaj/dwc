"use strict";
var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
	userName: {type: String, required: true, minlength: 1},
	emailAddress: {type: String, required: true, minlength: 1},
	password: {type: String, required: true, minlength: 1},
	firstName: {type: String, required: true, minlength: 1},
	lastName: {type: String, required: true, minlength: 1},
	phoneNumber: {type: Number, required: true, minlength: 1}
},{timestamps: true});
mongoose.model("User",UserSchema);