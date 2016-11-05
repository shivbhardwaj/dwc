var DWCAppModule = angular.module("DWC",["ngRoute","ngMessages", "ngCookies"]);
(function(){
	DWCAppModule.config(function($routeProvider){
		$routeProvider
		.when("/",
		{
			templateUrl: "partials/main.html",
		})
		.when('/aboutus',
		{
			templateUrl: "partials/aboutus/aboutus.html",
		})
		.when('/aboutus/whoweare',
		{
			templateUrl: "partials/aboutus/whoweare.html",
		})
		.when('/aboutus/events',
		{
			templateUrl: "partials/aboutus/events.html",
		})
		.when('/aboutus/news',
		{
			templateUrl: "partials/aboutus/news.html",
		})
		.when('/aboutus/partners',
		{
			templateUrl: "partials/aboutus/partners.html",
		})
		.when('/aboutus/facility',
		{
			templateUrl: "partials/aboutus/facility.html",
		})
		.when('/aboutus/newsletters',
		{
			templateUrl: "partials/aboutus/newsletters.html",
		})
		.when('/aboutus/career',
		{
			templateUrl: "partials/aboutus/career.html",
		})
		.when('/aboutus/contactus',
		{
			templateUrl: "partials/aboutus/contactus.html",
		})
		.when('/employers',
		{
			templateUrl: "partials/employers/employers.html",
		})
		.when('/employers/reserveworker',
		{
			templateUrl: "partials/employers/reserveworker.html",
			controller: 'jobNewController'
		})
		.when('/employers/success_stories',
		{
			templateUrl: "partials/employers/success_stories.html",
		})
		.when('/employers/services',
		{
			templateUrl: "partials/employers/services.html",
		})
		.when('/employers/faq',
		{
			templateUrl: "partials/employers/faq.html",
		})
		.when('/employers/gardening',
		{
			templateUrl: "partials/employers/gardening.html",
		})
		.when('/employers/housecleaning',
		{
			templateUrl: "partials/employers/housecleaning.html",
		})
		.when('/employers/moving',
		{
			templateUrl: "partials/employers/moving.html",
		})
		.when('/workers',
		{
			templateUrl: "partials/workers/workers.html",
		})
		.when('/workers/programs',
		{
			templateUrl: "partials/workers/programs.html",
		})
		.when('/workers/success_stories',
		{
			templateUrl: "partials/workers/workers_success_stories.html",
		})
		.when('/workers/faq',
		{
			templateUrl: "partials/workers/workers_faq.html",
		})
		.when('/workers/success_stories/4th_of_july_picnic',
		{
			templateUrl: "partials/workers/4th_of_july_picnic.html",
		})
		.when('/volunteer',
		{
			templateUrl: "partials/volunteers/volunteer.html",
		})
		.when('/volunteers/signup',
		{
			templateUrl: "partials/volunteers/signup.html",
		})
		.when('/volunteers/opportunities',
		{
			templateUrl: "partials/volunteers/opportunities.html",
		})
		.when('/volunteers/success_stories',
		{
			templateUrl: "partials/volunteers/volunteers_success_stories.html",
		})
		.when('/volunteers/faq',
		{
			templateUrl: "partials/volunteers/volunteers_faq.html",
		})
		.when('/donate',
		{
			templateUrl: "partials/donate.html",
		})

		// -------STAFF
		.when('/staff/login',
		{
			templateUrl: "partials/staff/login.html",
			controller: 'loginController'
		})
		.when('/staff',
		{
			templateUrl: "partials/staff/staffDashboard.html",
			controller: 'loginController'
		})
		// -------STAFF END

		// -------JOBS
		.when('/staff/jobs',
		{
			templateUrl: "partials/staff/jobs/index.html",
			controller: 'jobIndexController'
		})
		.when('/staff/jobs/new',
		{
			templateUrl: "partials/staff/jobs/index.html",
			// controller: 'jobNewController'
		})
		.when('/staff/jobs/:id/assign',
		{
			templateUrl: "partials/staff/jobs/assign.html",
			controller: 'jobEditController'
		})
		.when('/staff/jobs/:id/review',
		{
			templateUrl: "partials/staff/jobs/review.html",
			controller: 'jobEditController'
		})
		.when('/staff/jobs/:id/edit',
		{
			templateUrl: "partials/staff/jobs/edit.html",
			// controller: 'jobEditController'
		})
		.when('/staff/jobs/:id',
		{
			templateUrl: "partials/staff/jobs/show.html",
			controller: 'jobShowController'
		})

		// -------JOBS END

		// -------PAGES
		// .when('/staff/pages',
		// {
		// 	templateUrl: "partials/staff/pages/index.html",
		// 	// controller: 'jobIndexController'
		// })
		// .when('/staff/pages/new',
		// {
		// 	templateUrl: "partials/staff/pages/index.html",
		// 	// controller: 'jobNewController'
		// })
		.when('/staff/pages/:id/edit',
		{
			templateUrl: "partials/staff/pages/edit.html",
			// controller: 'jobEditController'
		})
		.when('/staff/pages/:id',
		{
			templateUrl: "partials/staff/pages/show.html",
			// controller: 'jobShowController'
		})

		// -------PAGES END

		// -------CATCHALL
		.otherwise({
			redirectTo: "/"
		})
		// if(window.history && window.history.pushState){
		// 	$locationProvider.html5Mode(true);
		// 	//will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">
		// 	//to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase
		// 	//if you don't wish to set base URL then use this
		// 	// 	$locationProvider.html5Mode({
		//   //        enabled: true,
		//   //        requireBase: false
		//   // 	});
		// }
	})
}());
