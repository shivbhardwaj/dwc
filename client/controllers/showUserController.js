DWCAppModule.controller('showUserController', function($scope, $routeParams, $location, userFactory){
	

  var userID=$routeParams.id;	
	
  userFactory.getUser(userID, function(data){    
    $scope.user=data.data;
  })

	$scope.removeUser = function(){        
    userFactory.removeUser(userID, function(){
      $location.path('/staff/allUsers');
    })
  }
})
