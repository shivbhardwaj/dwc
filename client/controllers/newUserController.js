DWCAppModule.controller('newUserController', function($scope, $routeParams, $cookies ,$location, userFactory){

	var logged_in_user = $cookies.get('logged_user');
	$scope.firstName = $cookies.get("firstName");
	$scope.userLevel = $cookies.get("userLevel");
	$scope.lastName = $cookies.get("lastName");
	$scope.emailAddress = $cookies.get("emailAddress");
	if(!logged_in_user){
		$location.url('/staff/login')
	}

  $scope.register=function(){
		userFactory.addUser($scope.newUser, function(userArray){
			$scope.users=userArray;
		})
	}

	$scope.logout = function(){
		$cookies.remove('logged_user');
		$location.url('/');
	}
})

//if cookie.userLevel = 0 (admin/principal) then show the create form with a user level dropdown of 1 for faculty
//else do not show the create form.
//same logic for level 1 (faculty) to create level 2 (student)
