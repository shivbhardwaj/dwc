DWCAppModule.factory('mailsFactory', ['$http', function($http){
    var factory = {};
    var mails = [];
    var mail = [];

    factory.getAllMails = function(callback){
        $http.get("/mails").then(function(data){            
            mails = data.data;
            callback(mails);
        });
    }

    factory.getOneMail = function(id, callback){        
        $http.get("/mails/"+id).then(function(data){            
            mails = data.data;
            callback(mails);
        });
    }

    factory.createMail = function(newMail, callback){

        $http.post("/mails", newMail).then(function(returned_data){
            if(typeof(callback) == 'function'){
                callback(returned_data.data);
                if(returned_data.data.errors){
                    window.location.href = '#/fail'
                }
                else{
                window.location.href = '#/success';
            } 
            }
        });
    }
    factory.updateMail = function(id, updatedMail, callback){        
        $http.put("/mails/"+id, updatedMail).then(function(returned_data){            
            if(typeof(callback) == 'function'){
                callback(returned_data.data);
                history.back();
            }
        });
    }
    factory.deleteMail = function(id, callback){        
        $http.delete("/mails/"+id).then(function(){
            if(typeof(callback) == 'function'){
                callback();
            }
        });
    }



    return factory;
}]);