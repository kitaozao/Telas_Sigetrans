var app = angular.module('form', []);

app.controller('formctrl', function($scope, $http){
	
	$scope.carArray =[{"id":1}];
	$scope.involvedArray=[{"id":1}];
	$scope.ocorrencia={"cars": $scope.carArray ,"involved": $scope.involvedArray};

	$scope.addNewCar = function() {
		console.log("addcar")
		var newItemNo = $scope.carArray.length+1;
		$scope.carArray.push({'id':newItemNo});
		console.log("addcar")
	};

	$scope.removeCar = function() {
		console.log("rmvcar")
		var lastItem = $scope.carArray.length-1;
		$scope.carArray.splice(lastItem);
		console.log("rmvcar")
	};

	$scope.addNewInvolved = function() {
		console.log("addinv")
		var newItemNo = $scope.involvedArray.length+1;
		$scope.involvedArray.push({'id':newItemNo});
		console.log("addinv")
	};

	$scope.removeInvolved = function() {
		console.log("rmvinv")
		var lastItem = $scope.involvedArray.length-1;
		$scope.involvedArray.splice(lastItem);
		console.log("rmvinv")
	};


	$scope.onSubmit = function(){


		console.log("enviando formulario:");
		console.log($scope.ocorrencia);

		$http.post('url go here', $scope.ocorrencia).
		success(function(data){
			console.log(":)")
		}).error(function(data){
			console.log(":(")
		});

	};
});