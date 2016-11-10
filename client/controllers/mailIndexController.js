DWCAppModule.controller('mailIndexController', ['$scope','mailsFactory', '$cookies' ,'$location', function($scope, mailsFactory, $cookies ,$location) {
/*
  THIS INDEX METHOD ACCESSES THE MailS FACTORY AND RUNS THE MailS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
  var logged_in_user = $cookies.get('logged_user');
  $scope.firstName = $cookies.get("firstName");
  $scope.userLevel = $cookies.get("userLevel");
  $scope.lastName = $cookies.get("lastName");
  $scope.emailAddress = $cookies.get("emailAddress");
  if(!logged_in_user){
    $location.url('/staff/login')
  }
  $scope.index = function(){
    mailsFactory.getAllMails(function(returnedData){
      $scope.mails = returnedData;
    });
  };
  $scope.delete = function(mail_id){
    mailsFactory.deleteMail(mail_id, function(){
    });
    $scope.index();
  };

  $scope.index();
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
