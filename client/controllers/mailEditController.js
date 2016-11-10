DWCAppModule.controller('mailEditController', ['$scope','$cookies','mailsFactory', '$location', '$routeParams', function($scope, $cookies,mailsFactory, $location, routeParams) {

  var logged_in_user = $cookies.get('logged_user');
  $scope.firstName = $cookies.get("firstName");
  $scope.userLevel = $cookies.get("userLevel");
  $scope.lastName = $cookies.get("lastName");
  $scope.emailAddress = $cookies.get("emailAddress");
  if(!logged_in_user){
    $location.url('/staff/login')
  }

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
  $scope.logout = function(){
    $cookies.remove('logged_user');
    $location.url('/');
  }

}]);
