var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports=(function(){
	return{
    login: function(req, res){
			User.findOne({
        emailAddress: req.body.emailAddress
      },
      function(err, data) {
        if (err) {
          res.json(
            {
              errors: {
                login_reg: {
                  message: "user name and/or password is invalid",
                  kind: "what didn't work",
                  path: "reference to the schema's name",
                  value: "cause of the initial error"
                }
              },name: "Validation error"
            });
        } else if (data && data.validPassword(req.body.password)) {
            res.json({
                _id: data._id,
                firstName: data.firstName,
                lastName: data.lastName,
								emailAddress: data.emailAddress,
								userLevel: data.userLevel
            });
        } else {
            res.json({
              errors: {
                login_reg: {
                  message: "user name and/or password is invalid",
                  kind: "what didn't work",
                  path: "reference to the schema's name",
                  value: "cause of the initial error"
                }
              },
            name: "Validation error"
            });
        }
      })
		},

		register: function(req, res){
			var user = new User(req.body);
        user.save(function(err, newuser) {
            if (err){
              res.json(err);
            }
            else{
            res.json({
                _id: newuser._id,
                firstName: newuser.firstName,
                lastName: newuser.lastName,
								emailAddress: data.emailAddress,
								userLevel: data.userLevel
            });
          }
        });
		},
    ///////
		getUsers: function(req, res){
			User.find({}, function(err, users){
				if(err){										
				} else{					
					res.json(users);
				}
			});
		},
		getUser: function(req, res){
			User.findOne({_id: req.params.id}, function(err, result){
				if(err){					
				} else {					
					res.json(result);
				}
			});
		},
		updateUser: function(req, res){
			User.findOne({_id:req.params.id}, function(err, result){
				if (err){					
					res.json(err);
				}
				else {					
					// result.userName=req.body.userName;
					result.emailAddress=req.body.emailAddress;
					result.password=req.body.password;
					result.firstName=req.body.firstName;
					result.lastName=req.body.lastName;
					result.phoneNumber=req.body.phoneNumber;
					result.userLevel=req.body.userLevel;
					result.save(function(err, result){
						if(err){							
							res.json(err);
						} else{							
							res.json(result);
						}
					});
				}
			});
		},
		userRegister: function(req, res){
			user=new User(req.body);			
			user.save(function(err, result){
				if(err){										
				} else{					
					res.json(result);
				}
			})
		},
		removeUser: function(req, res){			
			User.remove({_id:req.params.id}, function(err, result){
				if(err){					
				}
				else{					
					res.json(result);
				}
			})
		}
  }
})();
