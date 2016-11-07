DWCAppModule.controller('mailIndexController', ['$scope','mailsFactory', '$location', function($scope, mailsFactory, $location) {
/*
  THIS INDEX METHOD ACCESSES THE MailS FACTORY AND RUNS THE MailS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
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
  
}]);