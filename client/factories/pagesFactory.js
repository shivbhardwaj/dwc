DWCAppModule.factory('pagesFactory', ['$http', function($http){
    var factory = {};
    var pages = [];
    var page = [];

    factory.getAllPages = function(callback){
        $http.get("/pages").then(function(data){            
            pages = data.data;
            callback(pages);
        });
    }

    factory.getOnePage = function(id, callback){        
        $http.get("/pages/"+id).then(function(data){            
            pages = data.data;
            callback(pages);
        });
    }

    factory.createPage = function(newPage, callback){

        $http.post("/pages", newPage).then(function(returned_data){
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
    factory.updatePage = function(id, updatedPage, callback){        
        $http.put("/pages/"+id, updatedPage).then(function(returned_data){            
            if(typeof(callback) == 'function'){
                callback(returned_data.data);
                history.back();
            }
        });
    }
    factory.deletePage = function(id, callback){        
        $http.delete("/pages/"+id).then(function(){
            if(typeof(callback) == 'function'){
                callback();
            }
        });
    }



    return factory;
}]);