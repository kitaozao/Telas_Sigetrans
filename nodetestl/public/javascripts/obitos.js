var app = angular.module('obitosctrl', []);

app.controller('obitos', function($scope, $http){


    $scope.geral={};
    $scope.fatores={};
    $scope.condutas={};
    $scope.usuario={};
    $scope.outros={};
    $scope.orgaos=[{name:"PM", id:"pm"},{name:"PRF", id:"prf"},{name:"PRE", id:"pre"},{name:"CETTRANS", id:"cettrans"},{name:"Outro", id:"outro"}];
    $scope.orgaosSelecionados=[];
    $scope.causa={};
    $scope.obitos ={"infoGeral":$scope.geral,
                    "fatoresDeRisco":$scope.fatores,
                    "condutasDeRisco":$scope.condutas,
                    "usuario":$scope.usuario,
                    "outros":$scope.outros,
                    "orgaosResponsaveis":$scope.orgaosSelecionados,
                    "causa":$scope.causa};

    $scope.toogleSelection = function toogleSelection(nomeOrgao){
        var idx = $scope.orgaosSelecionados.indexOf(nomeOrgao);

        if(idx > -1){
            $scope.orgaosSelecionados.splice(idx, 1);
        }else{
            $scope.orgaosSelecionados.push(nomeOrgao);
        }

    };

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