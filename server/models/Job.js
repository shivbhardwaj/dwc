"use strict";
var mongoose = require("mongoose");
var JobSchema = new mongoose.Schema({
	// ----------------------employer information
	// employerId:{type: String, required: true, minlength: 1},
	firstName: {type: String, required: true, minlength: 1},
	lastName: {type: String, required: true, minlength: 1},
	companyName: {type: String},
	physicalAddress: {type: String, required: true, minlength: 1},
	city: {type: String, required: true, minlength: 1},
	zip: {type: String, required: true, minlength: 5},

	// password: {type: String, required: true, minlength: 1}, //do we want this for recurring employers?
	
	phoneNumber: {type: String, required: true, minlength: 1},
	emailAddress: {type: String, required: true, minlength: 1},

	// ----------------------job information
	startDate: {type: Date, required: true},
	startTime:{type: String, required: true, minlength: 3},
	workHours:{type: Number, required: true, minlength: 1},
	skillsNeeded: [{type: String, required: true}],
	numberOfWorkers: {type: Number, required: true, minlength: 1},
	payRate: {type: Number, required: true, min: 15},
	perks:[{type: String}],
	englishNeeded: {type: string, required: true, minlength: 1}
},{timestamps: true});
mongoose.model("Job",JobSchema);