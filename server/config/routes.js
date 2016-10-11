"use strict";
/////////////////////////////////////////////////////////////////////////
//                                                                     //
//                                                                     //
//        Place controllers here just like the example below           //
//        var users = require("./../controllers/users.js");            //
//                                                                     //
//                                                                     //
/////////////////////////////////////////////////////////////////////////

module.exports = function(app){
	app.get("/haha",function(req,res){
		users.index(req,res);
	});


	/////////////////////////////////////////////////////////////////////////
	//                                                                     //
	//                                                                     //
	//        					sample routes below						   //
	//                                                                     //
	//                                                                     //
	/////////////////////////////////////////////////////////////////////////
	// app.post("/login",function(req,res){
	// 	users.login(req,res);
	// });
	// app.post("/register",function(req,res){
	// 	users.create(req,res);
	// });
}