var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
var UserSchema = new mongoose.Schema({
	emailAddress: {type: String, required: true, minlength: 1},
	password: {type: String, required: true, minlength: 1},
	firstName: {type: String, required: true, minlength: 1},
	lastName: {type: String, required: true, minlength: 1},
	phoneNumber: {type: String, minlength: 1},
	userLevel: {type: String,required: true, default: 1}
},{timestamps: true});

UserSchema.methods.generateHash = function(password) {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {    
    valid = bcrypt.compareSync(password, this.password);    
   return valid;
};

UserSchema.pre('save', function(done) {
   if (this.password.length > 15 && this.password.startsWith("$2a")){

   } else {
       this.password = this.generateHash(this.password);
   }
   done();
});

mongoose.model("User",UserSchema);
