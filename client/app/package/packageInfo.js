angular.module('adviser.packageInfo', [])
.controller('packageInfoController', function($scope, $routeParams, Package){
    $scope.myInterval = 3000;
    $scope.total = 0;
    $scope.sgl = 0;
    $scope.dbl = 0;
    $scope.trbl = 0;
    $scope.enquiry = {};
    $scope.enquiry.room = {};
    var owner = {};
    var passengerInfo = {};
    var allPassengers = [];
	var getPackageInfo= function(){
		Package.getPackage($routeParams.id)
		.then(function(package){
			$scope.data= package;
			console.log($scope.data);
			$scope.photos= package.photos;
			$("#des").html(package.description);
			$("#iter").html(package.itinerary);
			$("#include").html(package.include);
			$("#exclude").html(package.exclude);
    		$scope.childPercent = $scope.data.childPrice;

		}).catch(function(error){
			alert("an error occured");
		});
	};
	getPackageInfo();
    
	$scope.calcCost = function (){
		var b = true;
		var bo = true;
		$scope.childNumber = 0;
		var discount = ($scope.trbl*$scope.childPercent)/100;
		$('.sgPass').each(function(i, obj){
			if (($(this).val())==""){
				b = false;
			}
			if (($(this).val())<4){
				bo = false;
			}


		});

		$('.dbPass').each(function (i, obj){
			if (($(this).val())== ""){
			b = false;
			}
			if (($(this).val())<4){
				bo = false;
			}
		}); 

		$('.trPass').each(function(i, obj) {
			if (($(this).val())==""){
				b = false;
			}
			if (($(this).val())<4){
				bo = false;
			}
			if (($(this).val())>=4 && ($(this).val())<=10){
				$scope.childNumber = $scope.childNumber+1;
			}
        });
        if (b === false) { 
        	alert("All Passengers Age Required");
        }
        else if (bo === false){
        	alert("Infant Free Of Charge");
        }
        else {
		$scope.total = (($("#num_sg").val())*($scope.sgl))+(($("#num_db").val())*($scope.dbl)*2)+((($("#num_tr").val())*($scope.trbl)*3)-($scope.childNumber*discount));
        }

	}
	$scope.changedValue = function (hotel){
		if (hotel === "tourist"){
			$scope.sgl=$scope.data.sglthree;
			$scope.dbl= $scope.data.dblthree;
			$scope.trbl= $scope.data.trblthree;
		}
		else if (hotel === "bronze"){
           $scope.sgl=$scope.data.sglfour;
		   $scope.dbl= $scope.data.dblfour;
		   $scope.trbl= $scope.data.trblfour;
		}
		else if (hotel === "silver"){
			$scope.sgl=$scope.data.sglfourb;
			$scope.dbl= $scope.data.dblfourb;
			$scope.trbl= $scope.data.trblfourb;
		}
		else if (hotel === "gold"){
			$scope.sgl=$scope.data.sglfive;
			$scope.dbl= $scope.data.dblfive;
			$scope.trbl= $scope.data.trblfive;

		}
		$scope.hotel = hotel;
	}

	$scope.sglNumber = function (sgl_num){
		t='<div class="row" id="single" style="margin-bottom:10px; margin-top: 3px"><div class="col-sm-12"><table class="tabel tabel-responsive"><thead><tr><th></th><th>Single <img src="../../images/camas.png"></th></tr><tr></tr></thead><tr><td> Passenger Age: </td><td> <input type="text" class="sgPass"/> </td></tr></tbody></table></div></div>'
		$("#singlePass").html(" ");
		var length = Number(sgl_num);
		for (var i = 1; i <= length ; i++){
			$("#singlePass").append(t);
		}
	}

	$scope.dblNumber = function (dbl_num){
		t='<div class="row" id="double" style="margin-bottom:10px; margin-top: 3px"><div class="col-sm-12"><table class="tabel tabel-responsive"><thead><tr><th></th><th>Double <img src="../../images/camas.png"><img src="../../images/camas.png"></th></tr><tr></tr></thead><tbody><tr><td> Passenger Age: </td><td> <input type="text" class="dbPass" /> </td></tr><tr><td> Passenger Age: </td><td> <input type="text" class="dbPass" /> </td></tr></tbody></table></div></div>'
		$("#doublePass").html(" ");
		var length = Number(dbl_num);
		for (var i = 1; i <= length ; i++){
			$("#doublePass").append(t);
		}
	}

	$scope.trblNumber = function (trbl_num){
		t=' <div class="row" id="triple"> <div class="col-sm-12"><table class="tabel tabel-responsive"><thead><tr><th></th><th>Triple <img src="../../images/camas.png"><img src="../../images/camas.png"><img src="../../images/camas.png"></th></tr><tr></tr></thead><tbody><tr><td> Passenger Age: </td><td> <input type="text" class="trPass" /> </td></tr><tr><td> Passenger Age: </td><td> <input type="text" class="trPass"/> </td></tr><tr><td> Passenger Age: </td><td> <input type="text" class="trPass" /> </td></tr></tbody></table></div></div>'
		$("#triplePass").html(" ");
		var length = Number(trbl_num);
		for (var i = 1; i <= length ; i++){
			$("#triplePass").append(t);
		}
	}
	
	// information of enquiry
	$scope.addEnquiry = function (){
		$scope.enquiry.checkin = $scope.checkin;
		$scope.enquiry.checkout = $scope.checkout;
        $scope.enquiry.city = $scope.city;
        $scope.enquiry.country = $scope.country;
        $scope.enquiry.mobile = $scope.mobile;
        $scope.enquiry.email = $scope.email;
        $scope.enquiry.hotelType = $scope.hotel;
        $scope.enquiry.room.single = Number($("#num_sg").val());
        $scope.enquiry.room.double = Number($("#num_db").val());
        $scope.enquiry.room.triple = Number($("#num_tr").val());
        $scope.enquiry.totalCost = $scope.total;
        $scope.enquiry.packageId = $scope.data._id;
		owner.firstName = $scope.ownerFirst;
		owner.lastName = $scope.ownerLast;
		owner.passport = $scope.ownerPassport;
		owner.birthDate = $scope.ownerBirthDate;
		owner.gender = $("#ownerGender").val();
		allPassengers.push(owner);
		$('.passDiv').each(function(i,obj){
			passengerInfo.firstName=$(this).children()[0].childNodes[0].childNodes[1].value;
			passengerInfo.lastName=$(this).children()[0].childNodes[1].childNodes[1].value;
			passengerInfo.passport=$(this).children()[0].childNodes[2].childNodes[1].value;
			passengerInfo.birthDate = $(this).children()[1].childNodes[0].childNodes[1].value;
			passengerInfo.gender = $(this).children()[1].childNodes[1].childNodes[1].value;
			allPassengers.push(passengerInfo);
		});
		$scope.enquiry.passengers = allPassengers;
        console.log($scope.enquiry);
		
	}

	$scope.book = function(){
		Package.addEnquiry($scope.enquiry)
		.then(function (enquiry){
			console.log(enquiry);
			alert("book done");
		})
		.catch(function (error){
			alert ("an error occured");
		})

	}
});