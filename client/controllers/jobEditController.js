DWCAppModule.controller('jobEditController', ['$scope','jobsFactory', '$cookies','$location', '$routeParams', function($scope, jobsFactory,$cookies, $location, routeParams) {
  var logged_in_user = $cookies.get('logged_user');
  $scope.firstName = $cookies.get("firstName");
  $scope.userLevel = $cookies.get("userLevel");
  $scope.lastName = $cookies.get("lastName");
  $scope.emailAddress = $cookies.get("emailAddress");
  
    $scope.update = function(){
        jobsFactory.updateJob(routeParams.id, $scope.job, function(data){
            $scope.jobs = data;
        });
    };
    $scope.delete = function(job_id){
        jobsFactory.deleteJob(job_id, function(){
        });
    };

    jobsFactory.getOneJob(routeParams.id, function(data){
		  $scope.job = data;
	});
  
}]);