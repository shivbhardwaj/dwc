app.controller('newController', ['$scope','pagesFactory', '$location', function($scope, pagesFactory, $location) {
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the pages when we get back?  We can re-run index.
*/
    $scope.create = function(){
        pagesFactory.createPage($scope.page, function(){
            $location.url("/pages");
        });
    }
}]);