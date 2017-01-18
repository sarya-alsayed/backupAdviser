angular.module('adviser.jordanPlaceCms', [])

.controller('jordanPlaceCmsController', function ($scope, $route, $window, $routeParams, Jordan) {
  // Your code here

  $scope.data = {};

  var inite = function () {
    Jordan.getPlaces()
      .then(function (place) {
        $scope.data = place;
        console.log($scope.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  inite();
  });
