'use strict';

function register(info){
  var picture='male';
  if(info.sex=='Female')
    picture='female';
  var data={
    username:info.username,
    email:info.email,
    password:info.password,
    sex:info.sex,
    profile:{
      picture:picture,
      languages:[]
    }
  };
  return data;
}
