var mongoose = require("mongoose");
var Page = mongoose.model("Page");

module.exports = {
    index: function(req, res) {
        Page.find({}, function(err, pages) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json(pages);
            }
        });
    },
    create: function(req, res) {
        var newPage = new Page(
        	{ 	name: req.body.name,
                text: req.body.text,
                video:req.body.video,
                pdf:req.body.pdf,
                image:req.body.image.base64 
            });
        newPage.save(function(err, data) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ data: data }); // change later to simple success message
            }
        });
    },
    update: function(req, res) {
        Page.findOne({ _id: req.params.id }, function(err, page) {
            if (err) {
                res.json({ error: err }); // could not locate the entry
            }
            page.frontPageLink = req.body.frontPageLink;
            page.frontPageImage = req.body.frontPageImage.base64;
            page.eventPageImage = req.body.eventPageImage.base64;
            page.save(function(err) {
                if (err) {
                    res.json({ error: err }); // could not save into database
                } else {
                    res.json({ success: "update success" });
                }
            })

        });
    },
    delete: function(req, res) {
        Page.remove({ _id: req.params.id }, function(err, page) {
            if (err) {
                res.json({ error: err });
            } else {
                res.json({ success: "succesfully deleted page" })
            }
        });
    },
    show: function(req, res) {
        Page.findOne({ _id: req.params.id }, function(err, page) {
            if (err) {
                res.json({ error: err }); // could not find page
            } else {
                res.json(page);
            }
        })
    }
}