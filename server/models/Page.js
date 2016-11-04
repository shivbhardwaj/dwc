"use strict";
var mongoose = require("mongoose");
var PageSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 1},
	text: [{type: String, required: true, minlength: 1}],
	video:[{type: String, required: true, minlength: 1}],
	pdf:[{type: String, required: true, minlength: 1}],
	image:[{type: String, required: true, minlength: 1}]
},{timestamps: true});
mongoose.model("Page",PageSchema);