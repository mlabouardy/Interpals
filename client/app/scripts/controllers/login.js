'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('LoginCtrl', function ($scope, $location, $window, UserAuthFactory, AuthenticationFactory) {
    $scope.login=function(){
      UserAuthFactory.login($scope.user)
        .success(function(data){
          $window.sessionStorage.token=data.token;
          AuthenticationFactory.isLogged = true;
          $location.path('/profile');
        })
        .error(function(){

        })
    }
  });
