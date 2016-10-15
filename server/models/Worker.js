"use strict";
var mongoose = require("mongoose");
var WorkerSchema = new mongoose.Schema({
	// ----------------------Personal info
	firstName: {type: String, required: true, minlength: 1},
	middleName: {type: String},
	lastName: {type: String, required: true, minlength: 1},
	secondLastName: {type: String},
	emailAddress: {type: String, required: true, minlength: 1},
	birthDate: {type: Date, required: true, minlength: 1},
	sex: {type: String, required: true, minlength: 1},
	height: {type: String, required: true, minlength: 1},
	weight: {type: String, required: true, minlength: 1},
	entryDate: {type: Date, required: true, minlength: 1},
	cellPhoneNumber: {type: String, required: true, minlength: 1},
	homePhoneNumber: {type: String, required: true, minlength: 1},
	maritalStatus: {type: String, required: true, minlength: 1},
	ethnicity:{type: String, required: true, minlength: 1},
	origin:{type: String, required: true, minlength: 1},
	skills:[{type: String, required: true, minlength: 1}],
	education:{type: String, required: true, minlength: 1},
	languages:[{type: String, required: true, minlength: 1}],
	lastYearsIncome:{type: String, required: true, minlength: 1},
	transportation:{type: String, required: true, minlength: 1},
	driversLicense:{type: String, required: true, minlength: 1},
	// password: {type: String, required: true, minlength: 1},//for future signin

	// -------------------emergency contact
	emergencyContact:{type: String, required: true, minlength: 1},
	emergencyPhoneNumber:{type: String, required: true, minlength: 1},

	// -------------------Home Country Contact
	countryContact:{type: String, required: true, minlength: 1},
	countryPhoneNumber:{type: String, required: true, minlength: 1},
	countryContactRelationship:{type: String, required: true, minlength: 1}


},{timestamps: true});
mongoose.model("Worker",WorkerSchema);