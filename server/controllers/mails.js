var mongoose = require("mongoose");
var Mail = mongoose.model("Mail");

module.exports = {
    index: function(req, res) {
        Mail.find({}, function(err, mails) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json(mails);
            }
        });
    },
    create: function(req, res) {
        var newMail = new Mail(
        	{ 	firstName: req.body.firstName,
                lastName: req.body.lastName,
                emailAddress: req.body.emailAddress,
                phoneNumber:req.body.phoneNumber,
                message:req.body.message,
                contactType:req.body.contactType
            });
        newMail.save(function(err, data) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ data: data }); // change later to simple success message
            }
        });
    },
    update: function(req, res) {
        Mail.findOne({ _id: req.params.id }, function(err, mail) {
            if (err) {
                res.json({ error: err }); // could not locate the entry
            }
            mail.firstName = req.body.firstName;
            mail.lastName = req.body.lastName;
            mail.emailAddress = req.body.emailAddress;
            mail.phoneNumber = req.body.phoneNumber;
            mail.message = req.body.message;
            mail.contactType = req.body.contactType;
            mail.answeredBy = req.body.answeredBy;
            mail.save(function(err) {
                if (err) {
                    res.json({ error: err }); // could not save into database
                } else {
                    res.json({ success: "update success" });
                }
            })

        });
    },
    delete: function(req, res) {
        Mail.remove({ _id: req.params.id }, function(err, mail) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ success: "succesfully deleted mail" })
            }
        });
    },
    show: function(req, res) {
        Mail.findOne({ _id: req.params.id }, function(err, mail) {
            if (err) {
                res.json({ error: err }); // could not find mail
            } else {
                res.json(mail);
            }
        })
    }
}