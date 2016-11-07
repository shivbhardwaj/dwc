DWCAppModule.controller('mailEditController', ['$scope','mailsFactory', '$location', '$routeParams', function($scope, mailsFactory, $location, routeParams) {

    $scope.update = function(){
        mailsFactory.updateMail(routeParams.id, $scope.mail, function(data){
            $scope.mails = data;
        });
    };
    mailsFactory.getOneMail(routeParams.id, function(data){
		  $scope.mail = data;
	});
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method 
  with ng-submit or ng-click (from the form in the previous assignment).  
  Want to all of the mails when we get back?  We can re-run index.
*/
  
}]);