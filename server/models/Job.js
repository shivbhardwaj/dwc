"use strict";
var mongoose = require("mongoose");
var JobSchema = new mongoose.Schema({
	// ----------------------employer information
	// employerId:{type: String, required: true, minlength: 1},
	employer: {type: String, required: true, minlength: 1},

	// ----------------------job information
	startDate: {type: Date, required: true},
	startTime:{type: Number, required: true, minlength: 3},
	hours:{type: Number, required: true, minlength: 1},
	skillsNeeded: [{type: String, required: true}],
	numberWorkers: {type: Number, required: true, minlength: 1},
	payRate: {type: Number, required: true, min: 15},
	perks:[{type: String}],
	englishNeeded: {type: string, required: true, minlength: 1}
},{timestamps: true});
mongoose.model("Job",JobSchema);