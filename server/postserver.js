'use strict';

var mongoose=require('mongoose');
var constants=require('./config/constants')
var User=require('./models/user');
var utility=require('./util/utility');

mongoose.connect(constants.DATABASE_HOST);

var sex=['Female','Male'];

for(var i=0;i<20;i++){
  var info={
    username: 'User'+i,
    email: 'User'+i+'@gmail.com',
    password: 'Password'+i,
    sex: sex[Math.floor(Math.random() * 1)]
  };
  var user=new User(utility(info));
  user.save(function(err){
    if(err){
      throw err;
    }else {
      console.log('******** Initialize database');
    }
  });
}
