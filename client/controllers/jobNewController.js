DWCAppModule.controller('jobNewController', ['$scope','jobsFactory', '$location', function($scope, jobsFactory, $location) {
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the jobs when we get back?  We can re-run index.
*/
    $scope.create = function(){
        jobsFactory.createJob($scope.job, function(){
            $location.url("/jobs");
        });
        }
}]);