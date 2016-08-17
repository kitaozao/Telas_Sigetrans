var app = angular.module('minmax', []);

app.controller('minmaxctrl', function($scope){
	$scope.formModel = {};

	$scope.onSubmit = function(){
		console.log("enviando formulario:");
		console.log($scope.formModel);

	};
});