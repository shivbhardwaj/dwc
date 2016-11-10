// DWCAppModule.controller('jobIndexController', ['$scope','jobsFactory', '$location', function($scope, jobsFactory, $location) {
/*
  THIS INDEX METHOD ACCESSES THE JobS FACTORY AND RUNS THE JobS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
DWCAppModule.controller('jobIndexController', ['$scope','jobsFactory', '$cookies','$location', '$routeParams', function($scope, jobsFactory,$cookies, $location, routeParams) {
  var logged_in_user = $cookies.get('logged_user');
  $scope.firstName = $cookies.get("firstName");
  $scope.userLevel = $cookies.get("userLevel");
  $scope.lastName = $cookies.get("lastName");
  $scope.emailAddress = $cookies.get("emailAddress");
    
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

    $scope.logout = function(){
    $cookies.remove('logged_user');
    $location.url('/');
  }
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the jobs when we get back?  We can re-run index.
*/
  
}]);