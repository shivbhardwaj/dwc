DWCAppModule.controller('editUserController', function($scope, $cookies, $routeParams, $location, userFactory){
	var logged_in_user = $cookies.get('logged_user');
	$scope.firstName = $cookies.get("firstName");
	$scope.userLevel = $cookies.get("userLevel");
	$scope.lastName = $cookies.get("lastName");
	$scope.emailAddress = $cookies.get("emailAddress");
	if(!logged_in_user){
		$location.url('/staff/login')
	}

  var userID=$routeParams.id;
  console.log('this is routeParams.id ', $routeParams.id);
  userFactory.getUser(userID, function(data){
    console.log('this is data from show controller ', data);
    $scope.user=data.data;
  });

  $scope.updateUser = function(){
    userFactory.updateUser($scope.user, function(data){
      $location.path('/staff/allUsers');
    });
  };

	$scope.logout = function(){
		$cookies.remove('logged_user');
		$location.url('/');
	}
});
