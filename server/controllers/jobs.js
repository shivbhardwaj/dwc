var mongoose = require("mongoose");
var Job = mongoose.model("Job");

module.exports = {
    index: function(req, res) {
        Job.find({}, function(err, jobs) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json(jobs);
            }
        });
    },
    create: function(req, res) {
        var newJob = new Job(
        	{
                employer: req.body.employer ,
                startDate: req.body.startDate ,
                startTime: req.body.startTime,
                hours: req.body.hours,
                skillsNeeded: req.body.skillsNeeded ,
                numberWorkers: req.body.numberWorkers ,
                payRate: req.body.payRate ,
                perks: req.body.perks,
                englishNeeded: req.body.englishNeeded  	
            });
        newJob.save(function(err, data) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ data: data }); // change later to simple success message
            }
        });
    },
    update: function(req, res) {
        Job.findOne({ _id: req.params.id }, function(err, job) {
            if (err) {
                res.json({ error: err }); // could not locate the entry
            }
            job.employer = req.body.employer;
            job.startDate = req.body.startDate;
            job.startTime = req.body.startTime;
            job.hours = req.body.hours;
            job.skillsNeeded = req.body.skillsNeeded;
            job.numberWorkers = req.body.numberWorkers;
            job.payRate = req.body.payRate;
            job.perks = req.body.perks;
            job.englishNeeded = req.body.englishNeeded;
            job.save(function(err) {
                if (err) {
                    res.json({ error: err }); // could not save into database
                } else {
                    res.json({ success: "update success" });
                }
            })

        });
    },
    delete: function(req, res) {
        Job.remove({ _id: req.params.id }, function(err, job) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ success: "succesfully deleted job" })
            }
        });
    },
    show: function(req, res) {
        Job.findOne({ _id: req.params.id }, function(err, job) {
            if (err) {
                res.json({ error: err }); // could not find job
            } else {
                res.json(job);
            }
        })
    }
}