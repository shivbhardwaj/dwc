DWCAppModule.controller('allUsersController', function($scope, $cookies, $routeParams, $location, userFactory){
	var logged_in_user = $cookies.get('logged_user');
  $scope.firstName = $cookies.get("firstName");
  $scope.userLevel = $cookies.get("userLevel");
  $scope.lastName = $cookies.get("lastName");
  $scope.emailAddress = $cookies.get("emailAddress");
  if(!logged_in_user){
    $location.url('/staff/login')
  }

	//dont wrap in scope, because we want this to show as soon as page loads
	userFactory.getUsers(function(data){
		$scope.users=data;
	})
	$scope.logout = function(){
		$cookies.remove('logged_user');
		$location.url('/');
	}

})
