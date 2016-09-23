var app = angular.module('obitosctrl', []);

app.controller('obitos', function($scope, $http){


    $scope.geral={};
    $scope.fatores={};
    $scope.condutas={};
    $scope.usuario={};
    $scope.outros={};
    $scope.orgaos={};
    $scope.causa={};
    $scope.obitos ={"infoGeral":$scope.geral,
                    "fatoresDeRisco":$scope.fatores,
                    "condutasDeRisco":$scope.condutas,
                    "usuario":$scope.usuario,
                    "outros":$scope.outros,
                    "orgaosResponsaveis":$scope.orgaos,
                    "causa":$scope.causa};

    $scope.submit = function(){


        console.log("enviando formulario:");
        console.log($scope.obitos);

        $http.post('127.0.0.1:9000', $scope.obitos).
        success(function(data){
            console.log(":)")
        }).error(function(data){
            console.log(":(")
        });

    };
});