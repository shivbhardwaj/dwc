DWCAppModule.controller('mailShowController', ['$scope','mailsFactory', '$location', '$routeParams', function($scope, mailsFactory, $location, routeParams) {

    $scope.show = function(){
        mailsFactory.getOneMail(routeParams.id, function(data){
            $scope.mail = data;
        });
    };
    $scope.show();
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the mails when we get back?  We can re-run index.
*/
  
}]);