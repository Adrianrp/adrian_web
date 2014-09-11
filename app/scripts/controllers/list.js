'use strict';

/**
 * @ngdoc function
 * @name adrianWebApp.controller:ListCtrl
 * @description
 * # ListCtrl
    Provides a list and search options for the works
 * Controller of the adrianWebApp
 */
angular.module('adrianWebApp')
  .controller('ListCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('data/data.json').success(function (data) {
      $scope.works = data;
      $scope.workOrder = 'year';
      $scope.direction = 'reverse';
    });
  });
