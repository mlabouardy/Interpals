'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('RegisterCtrl', function (REST, $scope, $location) {
    $scope.register=function(){
      REST.register($scope.user)
        .success(function(){
          $location.path('/login');
        })
        .error(function(){
          console.log('failed');
        });
    }
  });
