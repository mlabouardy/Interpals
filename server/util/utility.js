'use strict';


var md5 = require('md5');
var constants=require('../config/constants');

module.exports=function(info){
  var picture=constants.CLOUD_HOST+'/male.png';
  if(info.sex=='Female')
    picture=constants.CLOUD_HOST+'/female.png';
  var data={
    username:info.username,
    email:info.email,
    password:md5(info.password),
    sex:info.sex,
    profile:{
      picture:picture,
      languages:[]
    }
  };
  return data;
}
