DWCAppModule.factory('userFactory', ['$http', function($http){
    var factory = {};
    var users = [];
    var user = [];

    factory.login = function(data,callback,errback){
      $http.post('/login',data).then(callback,errback);
    };
    factory.index = function(callback){      
      $http.get('/').then(callback);
    };
    factory.register = function(data,callback,errback){
      $http.post('/register',data).then(callback,errback);
    };
    //

    factory.addUser=function(data, callback){  		
  		$http.post('/users', data).then(function(data){  			
  			users.push(data.data);
  			callback(users);
        history.back();
  		});
  	};

  	factory.getUsers=function(callback){  		
  		$http.get('/staff/allUsers').then(function(user){  			
  			users=user.data;
  			callback(users);
  		});
  	};

  	factory.getUser=function(userID, callback){
  		$http.get('/users/' + userID).then(function(user){  			
  			callback(user);
  		});
  	};

  	factory.updateUser=function(updatedUser, callback){
  		$http.post('/user/' + updatedUser._id, updatedUser).then(function(data){  			
  			callback(data);
  		});
  	};

  	factory.removeUser = function(userID, callback){            
      $http.post('/user/' + userID +'/delete').then(function(data){        
        callback(data);
        history.back();
      });
    };

  return factory;
}]);
