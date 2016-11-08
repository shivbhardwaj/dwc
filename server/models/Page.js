"use strict";
var mongoose = require("mongoose");
var PageSchema = new mongoose.Schema({
	frontPageImage: {type: String},
	frontPageLink: {type: String},
	eventPageImage: {type: String}
},{timestamps: true});
mongoose.model("Page",PageSchema);