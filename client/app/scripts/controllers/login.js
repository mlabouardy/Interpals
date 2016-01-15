'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope, md5, API, $location) {
    $scope.login=function(user){
      var data={
        username:user.username,
        password:md5.createHash(user.password || '')
      };
      API.login(data)
        .success(function(){
          $location.path('/profile');
        })
        .error(function(){
          console.log('ok');
        });
    }
  });
