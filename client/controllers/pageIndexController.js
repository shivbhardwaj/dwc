DWCAppModule.controller('pageIndexController', ['$scope','pagesFactory', '$cookies' ,'$location', function($scope, pagesFactory, $cookies ,$location) {
/*
  THIS INDEX METHOD ACCESSES THE PageS FACTORY AND RUNS THE PageS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
    var logged_in_user = $cookies.get('logged_user');
    $scope.firstName = $cookies.get("firstName");
    $scope.userLevel = $cookies.get("userLevel");
    $scope.lastName = $cookies.get("lastName");
    $scope.emailAddress = $cookies.get("emailAddress");
    // if(!logged_in_user){
    //   $location.url('/staff/login')
    // }

    $scope.index = function(){
        pagesFactory.getAllPages(function(returnedData){
            $scope.pages = returnedData;
        });
    };
    $scope.delete = function(page_id){
        pagesFactory.deletePage(page_id, function(){
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
  Want to all of the pages when we get back?  We can re-run index.
*/

}]);
