"use strict";
var mongoose = require("mongoose");
var EmployerSchema = new mongoose.Schema({
	employerName: {type: String, required: true, minlength: 1},
	company: {type: String},
	emailAddress: {type: String, required: true, minlength: 1},
	physicalAddress: {type: String, required: true, minlength: 1},
	city: {type: String, required: true, minlength: 1},
	state: {type: String, required: true, minlength: 1},

	// password: {type: String, required: true, minlength: 1}, //do we want this for recurring employers?
	
	phoneNumber: {type: String, required: true, minlength: 1}
},{timestamps: true});
mongoose.model("Employer",EmployerSchema);