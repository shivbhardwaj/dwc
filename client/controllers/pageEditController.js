DWCAppModule.controller('pageEditController', ['$scope','pagesFactory', '$location', '$routeParams', function($scope, pagesFactory, $location, routeParams) {

    $scope.update = function(){
        pagesFactory.updatePage(routeParams.id, $scope.page, function(data){
            $scope.pages = data;
        });
    };
    pagesFactory.getOnePage(routeParams.id, function(data){
		  $scope.page = data;
	});
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the pages when we get back?  We can re-run index.
*/
  
}]);