DWCAppModule.controller('editUserController', function($scope, $routeParams, $location, userFactory){

	console.log('I am able to load my editUserController along with my edit_user partial');

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
});
