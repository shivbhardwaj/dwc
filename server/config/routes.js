"use strict";
/* require controller file */
// var employers = require('../controllers/employers.js');
var jobs = require('./../controllers/jobs.js');
var mails = require('./../controllers/mails.js');
var users = require('./../controllers/users.js');
var pages = require('./../controllers/pages.js');
// var workers = require('../controllers/workers.js');

module.exports = function(app){

	// ----------------login routes
	app.post("/login", users.login);
	app.post("/users", users.userRegister);
	app.get("/users/:id", users.getUser);
	// app.get("/staff/createUser", users.userRegister);
	app.get("/staff/allUsers", users.getUsers);
	app.post("/staff/removeUser", users.removeUser);
	app.post("/user/:id",function(req,res){
		users.updateUser(req,res);
	});
	app.post('/user/:id/delete', function(req, res){
		console.log('made it to my /user/:id/delete post route');
		users.removeUser(req,res);
	})

	//----------------employers routes
	// app.get("/employers", employers.index); // show all employers
	// app.get("/employers/:id", employers.show); // show one employer
	// app.post("/employers", employers.create); // create a new employer
	// app.put("/employers/:id", employers.update); // update a employer info
	// app.delete("/employers/:id", employers.delete); // delete a employer

	//----------------jobs routes
	app.get("/jobs", jobs.index); // show all jobs
	app.get("/jobs/:id", jobs.show); // show one job
	app.post("/jobs", jobs.create); // create a new job
	app.put("/jobs/:id", jobs.update); // update a job info
	app.delete("/jobs/:id", jobs.delete); // delete a job

	//----------------mails routes
	app.get("/mails", mails.index); // show all mails
	app.get("/mails/:id", mails.show); // show one mail
	app.post("/mails", mails.create); // create a new mail
	app.put("/mails/:id", mails.update); // update a mail info
	app.delete("/mails/:id", mails.delete); // delete a mail

	//----------------pages routes
	app.get("/pages", pages.index); // show all pages
	app.get("/pages/:id", pages.show); // show one page
	app.post("/pages", pages.create); // create a new page
	app.put("/pages/:id", pages.update); // update a page info
	app.delete("/pages/:id", pages.delete); // delete a page

	//----------------users routes
	// app.get("/users", users.index); // show all users
	// app.get("/users/:id", users.show); // show one user
	// app.post("/users", users.create); // create a new user
	// app.put("/users/:id", users.update); // update a user info
	// app.delete("/users/:id", users.delete); // delete a user

	//----------------workers routes
	// app.get("/workers", workers.index); // show all workers
	// app.get("/workers/:id", workers.show); // show one worker
	// app.post("/workers", workers.create); // create a new worker
	// app.put("/workers/:id", workers.update); // update a worker info
	// app.delete("/workers/:id", workers.delete); // delete a worker
}
