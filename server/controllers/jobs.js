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
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                companyName: req.body.companyName,
                physicalAddress: req.body.physicalAddress,
                city: req.body.city,
                zip: req.body.zip,
                phoneNumber: req.body.phoneNumber,
                emailAddress: req.body.emailAddress,
                howHeard: req.body.howHeard,
                worksite: req.body.worksite,
                jobDescription: req.body.jobDescription,
                startDate: req.body.startDate,
                startTime: req.body.startTime,
                estimatedHours: req.body.estimatedHours,
                skillsNeeded: req.body.skillsNeeded,
                numberOfWorkers: req.body.numberOfWorkers,
                payRate: req.body.payRate,
                perks: req.body.perks,
                englishLevel: req.body.englishLevel 	
            });
        newJob.save(function(err, data) {
            if (err) {
                res.json(err);                
            } else {                
                res.json({ data: data }); // change later to simple success message
            }
        });
    },
    update: function(req, res){
        Job.findOne({ _id: req.params.id }, function(err, job) {
            if (err) {
                res.json({ error: err }); // could not locate the entry
            }
            job.firstName = req.body.firstName;
            job.lastName = req.body.lastName;
            job.companyName = req.body.companyName;
            job.physicalAddress = req.body.physicalAddress;
            job.city = req.body.city;
            job.zip = req.body.zip;
            job.phoneNumber = req.body.phoneNumber;
            job.emailAddress = req.body.emailAddress;
            job.howHeard = req.body.howHeard;
            job.worksite = req.body.worksite;
            job.jobDescription = req.body.jobDescription;
            job.startDate = req.body.startDate;
            job.startTime = req.body.startTime;
            job.estimatedHours = req.body.estimatedHours;
            job.skillsNeeded = req.body.skillsNeeded;
            job.numberOfWorkers = req.body.numberOfWorkers;
            job.payRate = req.body.payRate;
            job.perks = req.body.perks;
            job.englishLevel = req.body.englishLevel;
            job.updatedBy = req.body.updatedBy;
            job.workersAssigned = req.body.workersAssigned;
            job.assignmentNotes = req.body.assignmentNotes;
            job.assignedBy = req.body.assignedBy;
            job.confirmedBy = req.body.confirmedBy;
            job.review = req.body.review;
            job.reviewNotes = req.body.reviewNotes;
            job.reviewedBy = req.body.reviewedBy;
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