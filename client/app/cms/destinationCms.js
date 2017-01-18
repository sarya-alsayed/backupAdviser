angular.module('adviser.destinationCms', [])
.controller('destinationCmsController', function($scope, Destination){

	$scope.data= {};

	var getAllDestination= function(){
		Destination.getAllDestinations()
		.then(function(destinations){
			$scope.data= destinations;
		}).catch(function(error){
			throw error;
			console.log(error);
		});
	};
	getAllDestination();
});