'use strict';

var mongoose=require('mongoose');
var constants=require('./config/constants')
var User=require('./models/user');
var utility=require('./util/utility');

mongoose.connect(constants.DATABASE_HOST);

module.exports=function(app){

    app.get('/users',function(req,res){
        console.log('**** Request: Get users');
        User.find({},'username profile.picture',function(err, users){
          res.send(users);
        });
    });

    app.post('/register',function(req,res){
      console.log('**** Request: Register user');
      var data=utility(req.body);
      var user=new User(data);
      user.save(function(err){
        if(err)
          throw err;
        res.status(200).send();
      });
    });

    app.post('/login',function(req,res){
      console.log('**** Request: New connexion');
      User.findOne({username: req.body.username, password: req.body.password},function(err,user){
        if(err)
          throw err;
        if(user!=null)
          res.status(200).send();
        else {
          res.status(400).send();
        }
      });
    });

};
