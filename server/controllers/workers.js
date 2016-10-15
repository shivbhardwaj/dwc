var mongoose = require("mongoose");
var Worker = mongoose.model("Worker");
module.exports = {
    index: function(req, res) {
        Worker.find({}, function(err, workers) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json(workers);
            }
        });
    },
    create: function(req, res) {
        var newWorker = new Worker(
        	{ 	firstName: req.body.firstName, 
                middleName: req.body.middleName, 
                lastName: req.body.lastName, 
                secondLastName: req.body.secondLastName, 
                emailAddress: req.body.emailAddress, 
                birthDate: req.body.birthDate,
                sex: req.body.sex, 
                height: req.body.height, 
                weight: req.body.weight, 
                entryDate: req.body.entryDate, 
                cellPhoneNumber: req.body.cellPhoneNumber,
                homePhoneNumber: req.body.homePhoneNumber,
                maritalStatus: req.body.maritalStatus,
                ethnicity: req.body.ethnicity,
                origin: req.body.origin,
                skills: req.body.skills,
                education: req.body.education,
                languages: req.body.languages,
                lastYearsIncome: req.body.lastYearsIncome,
                transportation: req.body.transportation,
                driversLicense: req.body.driversLicense,
                emergencyContact: req.body.emergencyContact,
                emergencyPhoneNumber: req.body.emergencyPhoneNumber,
                countryContact: req.body.countryContact,
                countryPhoneNumber: req.body.countryPhoneNumber,
                countryContactRelationship: req.body.countryContactRelationship
            });
        newWorker.save(function(err, data) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ data: data }); // change later to simple success message
            }
        });
    },
    update: function(req, res) {
        Worker.findOne({ _id: req.params.id }, function(err, worker) {
            if (err) {
                res.json({ error: err }); // could not locate the entry
            }
            worker.firstName = req.body.firstName; 
            worker.middleName = req.body.middleName; 
            worker.lastName = req.body.lastName; 
            worker.secondLastName = req.body.secondLastName; 
            worker.emailAddress = req.body.emailAddress; 
            worker.birthDate = req.body.birthDate; 
            worker.sex = req.body.sex; 
            worker.height = req.body.height; 
            worker.weight = req.body.weight; 
            worker.entryDate = req.body.entryDate; 
            worker.cellPhoneNumber = req.body.cellPhoneNumber; 
            worker.homePhoneNumber = req.body.homePhoneNumber;
            worker.maritalStatus = req.body.maritalStatus; 
            worker.ethnicity = req.body.ethnicity;
            worker.origin = req.body.origin;
            worker.skills = req.body.skills;
            worker.education = req.body.education;
            worker.languages = req.body.languages;
            worker.lastYearsIncome = req.body.lastYearsIncome;
            worker.transportation = req.body.transportation;
            worker.driversLicense = req.body.driversLicense;
            worker.emergencyContact = req.body.emergencyContact;
            worker.emergencyPhoneNumber = req.body.emergencyPhoneNumber;
            worker.countryContact = req.body.countryContact;
            worker.countryPhoneNumber = req.body.countryPhoneNumber;
            worker.countryContactRelationship = req.body.countryContactRelationship;
            worker.save(function(err) {
                if (err) {
                    res.json({ error: err }); // could not save into database
                } else {
                    res.json({ success: "update success" });
                }
            })

        });
    },
    delete: function(req, res) {
        console.log("delete method in backend");
        Worker.remove({ _id: req.params.id }, function(err, worker) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ success: "succesfully deleted worker" })
            }
        });
    },
    show: function(req, res) {
        console.log("show method in backend");
        console.log(req.params.id);
        Worker.findOne({ _id: req.params.id }, function(err, worker) {
            if (err) {
                res.json({ error: err }); // could not find worker
            } else {
                res.json(worker);
            }
        })
    }
}