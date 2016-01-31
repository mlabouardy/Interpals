'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ProfileCtrl', function (REST, $location) {
    var mapOptions4 = {
               zoom: 11,
               center: new google.maps.LatLng(40.6700, -73.9400),
               // Style for Google Maps
               styles: [{"stylers":[{"hue":"#18a689"},{"visibility":"on"},{"invert_lightness":true},{"saturation":40},{"lightness":10}]}]
           };


    var mapElement2 = document.getElementById('map2');
    var map2 = new google.maps.Map(mapElement2, mapOptions4);


    var mapData = {
              "US": 498,
              "SA": 200,
              "CA": 1300,
              "DE": 220,
              "FR": 540,
              "CN": 120,
              "AU": 760,
              "BR": 550,
              "IN": 200,
              "GB": 120,
              "RU": 2000
          };

          $('#world-map').vectorMap({
              map: 'world_mill_en',
              backgroundColor: "transparent",
              regionStyle: {
                  initial: {
                      fill: '#e4e4e4',
                      "fill-opacity": 1,
                      stroke: 'none',
                      "stroke-width": 0,
                      "stroke-opacity": 0
                  }
              },
              series: {
                  regions: [{
                      values: mapData,
                      scale: ["#1ab394", "#22d6b1"],
                      normalizeFunction: 'polynomial'
                  }]
              }
          });

  });
