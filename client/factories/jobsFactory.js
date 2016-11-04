app.factory('jobsFactory', ['$http', function($http){
    var factory = {};
    var jobs = [];
    var job = [];

    factory.getAllJobs = function(callback){
        $http.get("/jobs").then(function(data){
            console.log(data);
            jobs = data.data;
            callback(jobs);
        });
    }

    factory.getOneJob = function(id, callback){
        console.log(id);
        $http.get("/jobs/"+id).then(function(data){
            console.log(data);
            jobs = data.data;
            callback(jobs);
        });
    }

    factory.createJob = function(newJob, callback){
        $http.post("/jobs", newJob).then(function(returned_data){
            console.log(returned_data);
            if(typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        });
    };
    factory.updateJob = function(id, updatedJob, callback){
        console.log(id);
        $http.put("/jobs/"+id, updatedJob).then(function(returned_data){
            console.log(returned_data);
            if(typeof(callback) == 'function'){
                callback(returned_data.data);
            }
        });
    }
    factory.deleteJob = function(id, callback){
        console.log(id);
        $http.delete("/jobs/"+id).then(function(){
            if(typeof(callback) == 'function'){
                callback();
            }
        });
    }



    return factory;
}]);