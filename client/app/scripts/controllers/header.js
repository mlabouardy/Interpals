'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:HeaderctrlCtrl
 * @description
 * # HeaderctrlCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('HeaderctrlCtrl', function ($scope, $location, UserAuthFactory) {
    $scope.isActive=function(path){
        return path==$location.path();
    }

    $scope.logout=function(){
      UserAuthFactory.logout();
    }
  });
