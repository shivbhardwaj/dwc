require('./server/config/mongoose.js');
//this config requirement comes from server.js

var mongoose = require('mongoose');
var User = mongoose.model('User');
//// these requirement should be the same as users.js(controller)

list = [
    {
      emailAddress:'admin@admin.com',
      password:'password',
      firstName:'Administrator',
      lastName: 'Admin',
      userLevel:3
    }
];


for(var i in list){
  user = new User (list[i]);
  user.save(function(err, result){
   if(err){
     console.log('Found this err while creating a new user entry ', err);
   }
   else {
     console.log('this is an admin user entry created by seeding',result);
   }
 }
)}
