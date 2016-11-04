console.log("server routes");
/* require controller file */
var employers = require('../controllers/employers.js');
var jobs = require('../controllers/jobs.js');
var pages = require('../controllers/pages.js');
var users = require('../controllers/users.js');
var workers = require('../controllers/workers.js');

module.exports = function(app){
	//----------------employers routes
	// app.get("/employers", employersController.index); // show all employers
	// app.get("/employers/:id", employersController.show); // show one employer
	// app.post("/employers", employersController.create); // create a new employer
	// app.put("/employers/:id", employersController.update); // update a employer info
	// app.delete("/employers/:id", employersController.delete); // delete a employer

	//----------------jobs routes
	app.get("/jobs", jobsController.index); // show all jobs
	app.get("/jobs/:id", jobsController.show); // show one job
	app.post("/jobs", jobsController.create); // create a new job
	app.put("/jobs/:id", jobsController.update); // update a job info
	app.delete("/jobs/:id", jobsController.delete); // delete a job

	//----------------pages routes
	app.get("/pages", pagesController.index); // show all pages
	app.get("/pages/:id", pagesController.show); // show one page
	app.post("/pages", pagesController.create); // create a new page
	app.put("/pages/:id", pagesController.update); // update a page info
	app.delete("/pages/:id", pagesController.delete); // delete a page

	//----------------users routes
	app.get("/users", usersController.index); // show all users
	app.get("/users/:id", usersController.show); // show one user
	app.post("/users", usersController.create); // create a new user
	app.put("/users/:id", usersController.update); // update a user info
	app.delete("/users/:id", usersController.delete); // delete a user

	//----------------workers routes
	// app.get("/workers", workersController.index); // show all workers
	// app.get("/workers/:id", workersController.show); // show one worker
	// app.post("/workers", workersController.create); // create a new worker
	// app.put("/workers/:id", workersController.update); // update a worker info
	// app.delete("/workers/:id", workersController.delete); // delete a worker
}

