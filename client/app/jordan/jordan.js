
angular.module('adviser.jordan', [])
.controller('jordanController', function ($scope, Jordan) {
  // Your code here
  var inite = function () {
    Jordan.getJordanInfo()
      .then(function (jordan) {
        $scope.data = jordan[0];
        $("#dest").html(jordan[0].description);
        console.log($scope.data);
      })
      .catch(function (error) {
        alert("an error eccured");
      });
  };

  var initePlaces = function () {
    Jordan.getPlaces()
      .then(function (places) {
        $scope.places = places;
        console.log(places);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  
  inite();
  initePlaces();
  });
