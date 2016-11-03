DWCAppModule.controller('loginController', function($scope, $location, $cookies, userFactory){
  // var logged_in_user = $cookies.get('logged_user');
  // console.log(logged_in_user, " this is the logged in user in the loginController");

  $scope.register = function(){
    usersFactory.register($scope.registration, function(data){
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
        $location.url('/');
        // $scope.register = {};
      }
    }, function(err){
      console.log("I am an error",err);
    })
  }

  $scope.login = function(){
    usersFactory.login(
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
          usersFactory.myWorkouts(cookie_userID,function(data){
            console.log(" data " + data.data)
             $scope.myWorkouts = data.data;
          }, function(err){
              console.log("I am an error",err);
          })

          $location.url('/dashboard');
          $cookies.put('logged_user', cookie_userID);
          $cookies.put('user_name', cookie_userNAME);
          console.log($cookies.get('logged_user'));
        }
      },
      function(err){
        console.log("I am an error",err);
      });
    }

});
