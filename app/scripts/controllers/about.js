'use strict';

/**
 * @ngdoc function
 * @name adrianWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adrianWebApp
 */
angular.module('adrianWebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
