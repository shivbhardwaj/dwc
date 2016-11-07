DWCAppModule.controller('jobEditController', ['$scope','jobsFactory', '$cookies','$location', '$routeParams', function($scope, jobsFactory,$cookies, $location, routeParams) {
  var logged_in_user = $cookies.get('logged_user');
  console.log(logged_in_user, " this is the logged in user in the jobShowController");
  $scope.firstName = $cookies.get("firstName");
  console.log("this is $scope.firstName for the logged in user ", $scope.firstName);
  $scope.userLevel = $cookies.get("userLevel");
  console.log("this is $scope.userLevel for the logged in user ", $scope.userLevel);
  $scope.lastName = $cookies.get("lastName");
  console.log("this is $scope.lastName for the logged in user ", $scope.lastName);
  $scope.emailAddress = $cookies.get("emailAddress");
  console.log("this is $scope.emailAddress for the logged in user ", $scope.emailAddress);
  
    $scope.update = function(){
        jobsFactory.updateJob(routeParams.id, $scope.job, function(data){
            $scope.jobs = data;
        });
    };
    jobsFactory.getOneJob(routeParams.id, function(data){
		  $scope.job = data;
	});
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the jobs when we get back?  We can re-run index.
*/
  
}]);