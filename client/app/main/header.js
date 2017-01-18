angular.module('adviser.header',[])
.controller('headerController', function($scope, Destination, Package){

	var getAllDestinations= function(){
		Destination.getAllDestinations()
		.then(function(destinations){
			$scope.destinations= destinations;
			console.log($scope.destinations);
		}).catch(function(error){
			throw error;
			console.log(error);
		});
	};
	getAllDestinations();

});