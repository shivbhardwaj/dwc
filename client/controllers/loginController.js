DWCAppModule.controller('loginController', function($scope, $location, $cookies, userFactory){
  var logged_in_user = $cookies.get('logged_user');
  console.log(logged_in_user, " this is the logged in user in the loginController");
  $scope._id = $cookies.get("_id");
  console.log("this is $scope._id for the logged in user ", $scope._id);
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
        cookie_userNAME = data.data.first_name;
        console.log(cookie_userID, 'this is the cookie_userID for user: ', cookie_userNAME);
        $cookies.put('logged_user', cookie_userID);
        console.log($cookies.get('logged_user'));
        $location.url('/staff');
        // $scope.register = {};
      }
    }, function(err){
      console.log("I am an error",err);
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
          cookie_userNAME = data.data.first_name;
          console.log(cookie_userID, 'this is the cookie_userID for user: ', cookie_userNAME);

          $location.url('/staff');
          $cookies.put('logged_user', cookie_userID);
          $cookies.put('user_name', cookie_userNAME);
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
		cookie_userID='';
		cookie_userNAME='';
		console.log(cookie_userID, 'this is the cookie_userID for user: ', cookie_userNAME);
	}

});
