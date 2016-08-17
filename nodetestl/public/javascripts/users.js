var app = angular.module('user', []);

app.controller('userCtrl', function($scope){
    $scope.formModel = {};

    $scope.onSubmit = function(){
        console.log("enviando formulario:");
        console.log($scope.formModel);

    };
});