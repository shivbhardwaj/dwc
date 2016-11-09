DWCAppModule.controller('allUsersController', function($scope, $routeParams, $location, userFactory){


	//dont wrap in scope, because we want this to show as soon as page loads
	userFactory.getUsers(function(data){
		$scope.users=data;
	})

})
