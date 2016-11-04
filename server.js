"use strict";
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var fs = require("fs");
var Hapi   = require('hapi');
var Inert  = require('inert');
var app = express();
var server = new Hapi.Server();
var port   = process.env.PORT || 8000;

server.register(Inert, function () {
  server.connection({ port: port });
  server.route( {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: { path: path.normalize(__dirname + '/') }
    }
  });
  server.start(function() { console.log('Visit: http://127.0.0.1:' +port) });
});

app.use(bodyParser.json(({limit: '16mb'})));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"./client")));
app.use(express.static(path.join(__dirname,"./node_modules")));
//researching
// app.use(expressJwt({ secret: jwtSecret }).unless({ path: ['/', '/login', '/register'] }));
require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(port,function(){
	console.log("on 8000");
})