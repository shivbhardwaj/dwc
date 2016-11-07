DWCAppModule.controller('mailNewController', ['$scope','mailsFactory', '$location', function($scope, mailsFactory, $location) {
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the mails when we get back?  We can re-run index.
*/
    $scope.create = function(){
        mailsFactory.createMail($scope.mail, function(){
            $location.url("/mails");
        });
    }
}]);