'use strict';

/**
 * @ngdoc service
 * @name appApp.UserAuthFactory
 * @description
 * # UserAuthFactory
 * Factory in the appApp.
 */
angular.module('appApp')
  .factory('UserAuthFactory', function ($http, $window, AuthenticationFactory) {
    var URL='http://localhost:3000';

    return{
      login:function(data){
        return $http.post(URL+'/login',data);
      },
      register:function(data){
        return $http.post(URL+'/register',data);
      },
      logout:function(){
        AuthenticationFactory.isLogged=false;
        delete $window.sessionStorage.token;
      }
    }
  });
