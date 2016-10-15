var mongoose = require("mongoose");
var Employer = mongoose.model("Employer");

module.exports = {
    index: function(req, res) {
        Employer.find({}, function(err, employers) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json(employers);
            }
        });
    },
    create: function(req, res) {
        var newEmployer = new Employer(
        	{ 	employerName: req.body.employerName,
                company: req.body.company,
                emailAddress: req.body.emailAddress,
                physicalAddress: req.body.physicalAddress,
                city: req.body.city,
                state: req.body.state,
                phoneNumber: req.body.phoneNumber });
        newEmployer.save(function(err, data) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ data: data }); // change later to simple success message
            }
        });
    },
    update: function(req, res) {
        Employer.findOne({ _id: req.params.id }, function(err, employer) {
            if (err) {
                res.json({ error: err }); // could not locate the entry
            }
            employer.employerName = req.body.employerName;
            employer.company = req.body.company;
            employer.emailAddress = req.body.emailAddress;
            employer.physicalAddress = req.body.physicalAddress;
            employer.city = req.body.city;
            employer.state = req.body.state;
            employer.phoneNumber = req.body.phoneNumber;
            employer.save(function(err) {
                if (err) {
                    res.json({ error: err }); // could not save into database
                } else {
                    res.json({ success: "update success" });
                }
            })

        });
    },
    delete: function(req, res) {
        Employer.remove({ _id: req.params.id }, function(err, employer) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ success: "succesfully deleted employer" })
            }
        });
    },
    show: function(req, res) {
        Employer.findOne({ _id: req.params.id }, function(err, employer) {
            if (err) {
                res.json({ error: err }); // could not find employer
            } else {
                res.json(employer);
            }
        })
    }
}