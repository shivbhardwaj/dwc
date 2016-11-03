DWCAppModule.factory('userFactory', function($http) {
  var usersFactory = function(){
    this.login = function(data,callback,errback){
      $http.post('/login',data).then(callback,errback);
    }
    this.index = function(callback){
      console.log("we are inside the index method");
      $http.get('/').then(callback);
    }
    this.register = function(data,callback,errback){
      $http.post('/register',data).then(callback,errback);
    }

    this.myWorkouts = function(userId,callback,errback){
      $http.get('/myWorkouts/'+userId).then(function(data){
        console.log('FACTORY', data.data);
        callback(data.data);
      });
    }

  }
  return new usersFactory;
});
