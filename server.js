"use strict";
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"./client")));
//researching
// app.use(expressJwt({ secret: jwtSecret }).unless({ path: ['/', '/login', '/register'] }));
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(8000,function(){
	console.log("haha on 8000");
});

