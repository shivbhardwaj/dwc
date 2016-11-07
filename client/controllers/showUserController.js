DWCAppModule.controller('showUserController', function($scope, $routeParams, $location, userFactory){

	console.log('I am able to load my showUserController along with my all_users partial');

  var userID=$routeParams.id;
	console.log('this is routeParams.id ', $routeParams.id);

	console.log("try factory haha-------------\n",userFactory.haha);
  userFactory.getUser(userID, function(data){
    console.log('this is data from show controller-------------\n', data);
    $scope.user=data.data;
  })

	$scope.removeUser = function(){
    console.log("this is the removeUser method in the showController");
    console.log(userID);
    userFactory.removeUser(userID, function(){
      $location.path('/staff/allUsers');
    })
  }
})
