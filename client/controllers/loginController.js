DWCAppModule.controller('loginController', function($scope, $location, $cookies, userFactory){
  var logged_in_user = $cookies.get('logged_user');
  console.log(logged_in_user, " this is the logged in user in the loginController");
  $scope.firstName = $cookies.get("firstName");
  $scope.emailAddress = $cookies.get("emailAddress");

  $scope.userLevel = $cookies.get("userLevel");
  console.log("this is $scope.firstName for the logged in user ", $scope.firstName);
  console.log("this is $scope.emailAddress for the logged in user ", $scope.emailAddress);
  console.log("this is $scope.userLevel for the logged in user ", $scope.userLevel);

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
        console.log(cookie_userID, 'this is the cookie_userID for user: ', cookie_firstName, cookie_lastName);
        $cookies.put('logged_user', cookie_userID);
        $cookies.put('firstName', cookie_firstName);
        $cookies.put('lastName', cookie_lastName);
        $cookies.put('emailAddress', cookie_emailAddress);
        $cookies.put('userLevel', cookie_userLevel);
        console.log($cookies.get('logged_user'));
        $location.url('/staff');
        // $scope.register = {};
        $scope.firstName = $cookies.get("firstName");
        $scope.emailAddress = $cookies.get("emailAddress");
        console.log("this is $scope.firstName for the logged in user ", $scope.firstName);
        console.log("this is $scope.emailAddress for the logged in user ", $scope.emailAddress);
      }
    }, function(err){
      console.log("I am an error",err);
    })
  }

  $scope.login = function(){
    userFactory.login(
      $scope.userLogin,
      function(data){
        console.log('This is a console test in loginController');
        if (data.data.errors){
          console.log("this is a failure to login");
          $scope.errors = data.data.errors;
        }
        else{
          $scope.user = data.data;
          console.log(data.data);
          cookie_userID = data.data._id;
          cookie_firstName = data.data.firstName;
          cookie_lastName = data.data.lastName;
          cookie_emailAddress = data.data.emailAddress;
          cookie_userLevel = data.data.userLevel;
          console.log(cookie_userID, 'this is the cookie_userID for user: ', cookie_firstName, cookie_lastName, cookie_emailAddress, cookie_userLevel);
          $location.url('/staff');
          $cookies.put('logged_user', cookie_userID);
          $cookies.put('firstName', cookie_firstName);
          $cookies.put('lastName', cookie_lastName);
          $cookies.put('emailAddress', cookie_emailAddress);
          $cookies.put('userLevel', cookie_userLevel);
          console.log($cookies.get('logged_user'));
        }
      },
      function(err){
        console.log("I am an error",err);
      });
    }


	//log out method
	$scope.logout = function(){
		console.log('we are in the logout method');
		console.log($cookies.get('logged_user'), 'this is the cookie method PRE remove');
		$cookies.remove('logged_user');
		$location.url('/');
		console.log($cookies.get('logged_user'), 'this is the logged_user cookie POST remove');
	}

});
