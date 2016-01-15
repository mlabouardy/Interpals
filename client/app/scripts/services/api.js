'use strict';

/**
 * @ngdoc service
 * @name clientApp.API
 * @description
 * # API
 * Service in the clientApp.
 */
angular.module('clientApp')
  .service('API', function ($http) {
    var baseUrl='http://localhost:4300';
    return{
      register:function(user){
        return $http.post(baseUrl+'/register', user);
      },
      users:function(){
        return $http.get(baseUrl+'/users');
      },
      login:function(user){
        return $http.post(baseUrl+'/login',user);
      }
    }
  });
