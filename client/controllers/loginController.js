DWCAppModule.controller('loginController', function($scope, $location, $cookies, userFactory){
  var logged_in_user = $cookies.get('logged_user');
  $scope.firstName = $cookies.get("firstName");
  $scope.userLevel = $cookies.get("userLevel");
  $scope.lastName = $cookies.get("lastName");
  $scope.emailAddress = $cookies.get("emailAddress");
  if(!logged_in_user){
    $location.url('/staff/login')
  }

  $scope.register = function(){
    userFactory.register($scope.registration, function(data){
      if (data.data.errors){
        $scope.errors = data.data.errors;
      }
      else{
        $scope.user = data.data;
        cookie_userID = data.data._id;
        cookie_firstName = data.data.firstName;
        cookie_lastName = data.data.lastName;
        cookie_emailAddress = data.data.emailAddress;
        cookie_userLevel = data.data.userLevel;
        $cookies.put('logged_user', cookie_userID);
        $cookies.put('firstName', cookie_firstName);
        $cookies.put('lastName', cookie_lastName);
        $cookies.put('emailAddress', cookie_emailAddress);
        $cookies.put('userLevel', cookie_userLevel);
        $location.url('/staff');
        // $scope.register = {};
        $scope.firstName = $cookies.get("firstName");
        $scope.emailAddress = $cookies.get("emailAddress");
      }
    }, function(err){
    })
  }

  $scope.login = function(){
    userFactory.login(
      $scope.userLogin,
      function(data){
        if (data.data.errors){
          $scope.errors = data.data.errors;
        }
        else{
          $scope.user = data.data;
          cookie_userID = data.data._id;
          cookie_firstName = data.data.firstName;
          cookie_lastName = data.data.lastName;
          cookie_emailAddress = data.data.emailAddress;
          cookie_userLevel = data.data.userLevel;
          $location.url('/staff');
          $cookies.put('logged_user', cookie_userID);
          $cookies.put('firstName', cookie_firstName);
          $cookies.put('lastName', cookie_lastName);
          $cookies.put('emailAddress', cookie_emailAddress);
          $cookies.put('userLevel', cookie_userLevel);
        }
      },
      function(err){
      });
    }


	//log out method
	$scope.logout = function(){
		$cookies.remove('logged_user');
		$location.url('/');
	}

});
