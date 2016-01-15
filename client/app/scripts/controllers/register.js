'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('RegisterCtrl', function ($scope, API) {
    $scope.register=function(user){
      API.register(user)
        .success(function(){
          console.log('Registred !');
        })
        .error(function(){
          console.log('Failed !');
        });
    }
  });
