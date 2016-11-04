app.controller('indexController', ['$scope','jobsFactory', '$location', function($scope, jobsFactory, $location) {
/*
  THIS INDEX METHOD ACCESSES THE JobS FACTORY AND RUNS THE JobS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
    $scope.index = function(){
        jobsFactory.getAllJobs(function(returnedData){
            $scope.jobs = returnedData;
        });
    };
    $scope.delete = function(job_id){
        jobsFactory.deleteJob(job_id, function(){
        });
        $scope.index();
    };
    $scope.index();
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the jobs when we get back?  We can re-run index.
*/
  
}]);