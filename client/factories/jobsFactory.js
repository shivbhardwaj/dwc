DWCAppModule.factory('jobsFactory', ['$http', function($http){
    var factory = {};
    var jobs = [];
    var job = [];

    factory.getAllJobs = function(callback){
        $http.get("/jobs").then(function(data){
            jobs = data.data;
            callback(jobs);
        });
    }

    factory.getOneJob = function(id, callback){
        $http.get("/jobs/"+id).then(function(data){
            jobs = data.data;
            console.log('this is the job I am looking for in factory', jobs);
            callback(jobs);
        });
    }

    factory.createJob = function(newJob, callback){

        $http.post("/jobs", newJob).then(function(returned_data){
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
    factory.createJobForStaff = function(newJob, callback){

        $http.post("/jobs", newJob).then(function(returned_data){
            if(typeof(callback) == 'function'){
                callback(returned_data.data);
                if(returned_data.data.errors){
                    window.location.href = '#/fail'
                }
                else{
                window.location.href = '#/staff/jobs';
            }
            }
        });
    }

    factory.updateJob = function(id, updatedJob, callback){
        $http.put("/jobs/"+id, updatedJob).then(function(returned_data){
            if(typeof(callback) == 'function'){
                callback(returned_data.data);
                history.back();
            }
        });
    }
    factory.deleteJob = function(id, callback){
        $http.delete("/jobs/"+id).then(function(){
            if(typeof(callback) == 'function'){
                callback();
                window.location.href = '#/staff/jobs';
            }
        });
    }



    return factory;
}]);
