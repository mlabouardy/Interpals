'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('appApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'summernote',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $httpProvider.interceptors.push('TokenInterceptor');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        title:'Home',
        access: {
          requiredLogin: false
        }
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        title:'Register',
        access: {
          requiredLogin: false
        }
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        title:'Login',
        access: {
          requiredLogin: false
        }
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        title:'Profile',
        access: {
          requiredLogin: true
        }
      })
      .when('/friends', {
        templateUrl: 'views/friends.html',
        controller: 'FriendsCtrl',
        title:'Friends',
        access:{
          requiredLogin:true
        }
      })
      .when('/who-iam/:id', {
        templateUrl: 'views/who-iam.html',
        controller: 'WhoIamCtrl',
        controllerAs: 'whoIam'
      })
      .when('/user/:id', {
        templateUrl: 'views/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user'
      })
      .when('/profile-info', {
        templateUrl: 'views/profile-info.html',
        controller: 'ProfileInfoCtrl',
        controllerAs: 'profileInfo'
      })
      .when('/profile-who-iam', {
        templateUrl: 'views/profile-who-iam.html',
        controller: 'ProfileWhoIamCtrl'
      })
      .when('/profile-countries', {
        templateUrl: 'views/profile-countries.html',
        controller: 'ProfileCountriesCtrl',
        controllerAs: 'profileCountries'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, $location, AuthenticationFactory){
    AuthenticationFactory.check();

    $rootScope.$on('$routeChangeStart', function (event, current, previous) {
      if(AuthenticationFactory.isLogged)
        $rootScope.isConnected=true;
      else
        $rootScope.isConnected=false;

      if ((current.access && current.access.requiredLogin) && !AuthenticationFactory.isLogged) {
        $location.path("/login");
      }

      if(current.$$route)
        $rootScope.title = current.$$route.title;
      else {
        $rootScope.title = 'Logout';
      }
    });
  });
