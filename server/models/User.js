var mongoose = require("mongoose");
var bcrypt = require('bcrypt');
var UserSchema = new mongoose.Schema({
	// userName: {type: String, required: true, minlength: 1},
	emailAddress: {type: String, required: true, minlength: 1},
	password: {type: String, required: true, minlength: 1},
	firstName: {type: String, required: true, minlength: 1},
	lastName: {type: String, required: true, minlength: 1},
	phoneNumber: {type: Number, minlength: 1},
	userLevel: {type: Number, minlength: 1}
},{timestamps: true});

UserSchema.methods.generateHash = function(password) {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    //console.log(" entered password " + this.generateHash(password) + " stored pass " + this.password);
    valid = bcrypt.compareSync(password, this.password);
    //console.log(" validPassword return " + valid)
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
