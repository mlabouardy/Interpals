'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:ProfileWhoIamCtrl
 * @description
 * # ProfileWhoIamCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('ProfileWhoIamCtrl', function ($scope) {
    $scope.options = {
   height: 300,
   focus: true,
   airMode: false,
   toolbar: [
           ['edit',['undo','redo']],
           ['headline', ['style']],
           ['style', ['bold', 'italic', 'underline', 'superscript', 'subscript', 'strikethrough', 'clear']],
           ['fontface', ['fontname']],
           ['textsize', ['fontsize']],
           ['fontclr', ['color']],
           ['alignment', ['ul', 'ol', 'paragraph', 'lineheight']],
           ['height', ['height']],
           ['table', ['table']],
           ['insert', ['link','picture','video','hr']],
           ['view', ['fullscreen', 'codeview']],
           ['help', ['help']]
       ]
 };
  });
