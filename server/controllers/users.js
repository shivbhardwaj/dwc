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
					console.log(err);
					console.log('error in getUsers controller');
				} else{
					console.log('this is all the users', users);
					res.json(users);
				}
			});
		},
		getUser: function(req, res){
			User.findOne({_id: req.params.id}, function(err, result){
				if(err){
					console.log('this is the err when looking for user', err);
				} else {
					console.log('this is the user', result);
					res.json(result);
				}
			});
		},
		updateUser: function(req, res){
			User.findOne({_id:req.params.id}, function(err, result){
				if (err){
					console.log('unable to find user, here is error ', err);
					res.json(err);
				}
				else {
					console.log("foundit!\n",result);
					// result.userName=req.body.userName;
					result.emailAddress=req.body.emailAddress;
					result.password=req.body.password;
					result.firstName=req.body.firstName;
					result.lastName=req.body.lastName;
					result.phoneNumber=req.body.phoneNumber;
					result.userLevel=req.body.userLevel;
					result.save(function(err, result){
						if(err){
							console.log('unable to save user, here is err', err);
							res.json(err);
						} else{
							console.log('successfully updated user!', result);
							res.json(result);
						}
					});
				}
			});
		},
		userRegister: function(req, res){
			user=new User(req.body);
			console.log('this is req.body', req.body);
			user.save(function(err, result){
				if(err){
					console.log('error creating a new user, ', err);
					console.log('this is req.body', req.body);
				} else{
					console.log('this is our new user ', result);
					res.json(result);
				}
			})
		},
		removeUser: function(req, res){
			console.log("this is the id using req params ", req.params.id);
			User.remove({_id:req.params.id}, function(err, result){
				if(err){
					console.log('couldnt delete the desired user', err);
				}
				else{
					console.log('successfully deleted user from DB', result);
					res.json(result);
				}
			})
		}
  }
})();
