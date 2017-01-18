angular.module('adviser.cms', [])

.controller('cmsController', function ($scope, $location) {
  $scope.checkLogin = function () {
    if (($scope.username === 'admin') && ($scope.password === 'adviser')){
      $location.path('cms/dashboard');
    } 
    else{
    	alert('UserName or Password is not valid');
    } 
  }
  });
