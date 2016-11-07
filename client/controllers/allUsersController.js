DWCAppModule.controller('allUsersController', function($scope, $routeParams, $location, userFactory){

	console.log('I am able to load my allUsersController along with my all_users partial');

	//dont wrap in scope, because we want this to show as soon as page loads
	userFactory.getUsers(function(data){
		console.log('this is data in allUsersController getUsers', data);
		$scope.users=data;
	})

})
