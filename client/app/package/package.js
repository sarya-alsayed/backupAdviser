angular.module('adviser.package', [])
.controller('packageController', function($scope, $routeParams, Package){
	$scope.currentPage = 1;
	$scope.pageSize = 6;

	var getAllPackages= function(){
		Package.getPackages($routeParams.type)
		.then(function(packages){
			$scope.data= packages;
			console.log($scope.data);
		}).catch(function(error){
			alert("an error occured");
		});
	};
	getAllPackages();

});