'use strict';

var mongoose=require('mongoose');
var constants=require('./config/constants')
var User=require('./models/user');

mongoose.connect(constants.DATABASE_HOST);

for(var i=0;i<20;i++){
  var info={
    username: 'User'+i,
    email: 'User'+i+'@gmail.com',
    password: 'Password'+i
  };
  var user=new User(info);
  user.save(function(err){
    if(err){
      throw err;
    }else {
      console.log('******** Initialize database');
    }
  });
}
