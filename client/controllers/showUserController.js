DWCAppModule.controller('showUserController', function($scope, $cookies ,$routeParams, $location, userFactory){
	var logged_in_user = $cookies.get('logged_user');
  $scope.firstName = $cookies.get("firstName");
  $scope.userLevel = $cookies.get("userLevel");
  $scope.lastName = $cookies.get("lastName");
  $scope.emailAddress = $cookies.get("emailAddress");
  if(!logged_in_user){
    $location.url('/staff/login')
  }

  var userID=$routeParams.id;

  userFactory.getUser(userID, function(data){
    $scope.user=data.data;
  })

	$scope.removeUser = function(){
    userFactory.removeUser(userID, function(){
      $location.path('/staff/allUsers');
    })
  }
	$scope.logout = function(){
		$cookies.remove('logged_user');
		$location.url('/');
	}
})
