DWCAppModule.controller('newUserController', function($scope, $routeParams, $location, userFactory){
	

  $scope.register=function(){		
		userFactory.addUser($scope.newUser, function(userArray){
			$scope.users=userArray;
		})
	}
})

//if cookie.userLevel = 0 (admin/principal) then show the create form with a user level dropdown of 1 for faculty
//else do not show the create form.
//same logic for level 1 (faculty) to create level 2 (student)
