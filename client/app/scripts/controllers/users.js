'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('UsersCtrl', function ($scope, API) {
    API.users()
      .success(function(users){
        $scope.users=users;
      })
      .error(function(){

      });
  });
