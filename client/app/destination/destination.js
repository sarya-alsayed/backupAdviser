angular.module('adviser.destination', [])
.controller('destinationController', function($scope, Destination,$routeParams, Package){

	$scope.myInterval= 10000;
    $scope.chunkSize = 4;

	function chunk(arr, size) {
	  var newArr = [];
	  var arrayLength = arr.length;
	  for (var i = 0; i < arrayLength; i += size) {
	    newArr.push(arr.slice(i, i + size));
	  }
	  return newArr;
	}

	function getWords(str) {
	    return str.split(/\s+/).slice(0,10).join(" ");
	}
	
	var getDestinationInfo= function(){
		Destination.getDestinationInfo($routeParams.id)
		.then(function(destinationInfo){
			$scope.destinationInfo= destinationInfo;
			$scope.destinationPhotos= destinationInfo.photos;
			$('#description').html(destinationInfo.description);
		}).catch(function(error){
			throw error;
			console.log(error);
		});
	};
	getDestinationInfo();

	var getCityBreaks= function(){
		Package.getPackages("city-breaks")
		.then(function(packages){
			$scope.cityBreaks= packages;
			$scope.first= packages[0];
			$scope.second= packages[1];
			$scope.third= packages[2];
			$scope.fourth= packages[3];
		}).catch(function(error){
			throw error;
			console.log(error);
		});
	};
	getCityBreaks();

	var getJordanTours= function(){
		Package.getPackages("jordan-tours")
		.then(function(packages){
			for (var i=0; i<packages.length; i++){
				packages[i].outline= getWords(packages[i].outline)
			}
			$scope.chunkedSlides = chunk(packages, $scope.chunkSize);
		}).catch(function(error){
			throw error;
			console.log(error);
		});
	};
	getJordanTours();

	var getCombinedTours= function(){
		Package.getPackages("combined-tours")
		.then(function(packages){
			$scope.combinedTours= packages;
			$scope.chunkedSlides1 = chunk(packages, $scope.chunkSize);
		}).catch(function(error){
			throw error;
			console.log(error);
		});
	};
	getCombinedTours();
 
});