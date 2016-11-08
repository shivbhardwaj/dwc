"use strict";
var mongoose = require("mongoose");
var MailSchema = new mongoose.Schema({
	firstName: {type: String},
	lastName: {type: String},
	emailAddress: {type: String},
	phoneNumber: {type: String},
	message: {type: String},
	contactType: {type: String},
	answeredBy:{type: String}
},{timestamps: true});
mongoose.model("Mail",MailSchema);