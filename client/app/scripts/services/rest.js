'use strict';

/**
 * @ngdoc service
 * @name appApp.REST
 * @description
 * # REST
 * Factory in the appApp.
 */
angular.module('appApp')
  .factory('REST', function ($http) {
    var URL='http://localhost:3000';

    return{
      users:function(){
        return $http.get(URL+'/api/users');
      }
    }

  });
