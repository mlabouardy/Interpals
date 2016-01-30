'use strict';

/**
 * @ngdoc service
 * @name appApp.TokenInterceptor
 * @description
 * # TokenInterceptor
 * Factory in the appApp.
 */
angular.module('appApp')
  .factory('TokenInterceptor', function ($window, $q) {
    return {
    request: function(config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers['X-Access-Token'] = $window.sessionStorage.token;
      }
      return config || $q.when(config);
    },

    response: function(response) {
      return response || $q.when(response);
    }
  };
  });
