DWCAppModule.controller('jobEditController', ['$scope','jobsFactory', '$location', '$routeParams', function($scope, jobsFactory, $location, routeParams) {

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