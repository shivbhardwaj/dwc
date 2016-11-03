"use strict";
/////////////////////////////////////////////////////
//                                                 //
//	Place controllers here just like the example   //
//	below: 										   //
//var users = require("./../controllers/users.js");//
//                                                 //
/////////////////////////////////////////////////////

module.exports = function(app){
	app.get("/haha",function(req,res){
		users.index(req,res);
	});
	app.get("/aboutus",function(req,res){

	});
	app.post("/login",function(req,res){
		users.login(req,res);
	});
	app.post("/register",function(req,res){
		users.register(req,res);
	});

	/////////////////////////////////////////////////////
	//                                                 //
	//					sample routes				   //
	//                                                 //
	/////////////////////////////////////////////////////

	// app.post("/login",function(req,res){
	// 	users.login(req,res);
	// });
	// app.post("/register",function(req,res){
	// 	users.create(req,res);
	// });
}
