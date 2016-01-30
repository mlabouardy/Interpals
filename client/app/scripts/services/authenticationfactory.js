'use strict';

/**
 * @ngdoc service
 * @name appApp.AuthenticationFactory
 * @description
 * # AuthenticationFactory
 * Factory in the appApp.
 */
angular.module('appApp')
  .factory('AuthenticationFactory', function ($window) {
    var auth={
      isLogged:false,
      check:function(){
        if($window.sessionStorage.token){
          this.isLogged=true;
        }else{
          this.isLogged=false;
        }
      }
    }
    return auth;
  });
