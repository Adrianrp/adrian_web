'use strict';

/**
 * @ngdoc function
 * @name adrianWebApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the adrianWebApp
 */
angular.module('adrianWebApp')
  .controller('DetailsCtrl', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $http.get('data/data.json').success(function (data) {
      $scope.works = data;
      $scope.workOrder = 'year';
      $scope.whichItem = $routeParams.itemId;

      // If it is NOT the first item in the array, then
      // assign the number of routeParams to the created
      // variable: prevItem (routeParams returns a string, so it has 
      // to be forced back to a number).
      if ($routeParams.itemId > 0) {
        $scope.prevItem = Number($routeParams.itemId) - 1;
      } else { // if it is the first item, then assign whatever the array.length is minus 1.
               // we want to go back to the beginning of the array.
        $scope.prevItem = $scope.works.length - 1;
      }
      if ($routeParams.itemId < $scope.works.length - 1) {
        $scope.nextItem = Number($routeParams.itemId) + 1;
      } else {
        $scope.nextItem = 0;
      }
    });
  });
