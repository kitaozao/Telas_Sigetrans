var app = angular.module('obitosctrl', []);

app.controller('obitos', function($scope, $http){


    $scope.geral={};
    $scope.fatores={};
    $scope.condutas={};
    $scope.usuario={};
    $scope.outros={};
    $scope.orgaos=[
        {name:"PM",         id:"PM"},
        {name:"PRF",        id:"PRF"},
        {name:"PRE",        id:"PRE"},
        {name:"CETTRANS",   id:"CETTRANS"},
        {name:"Outro",      id:"outro"}
        ];
    $scope.orgaosSelecionados=[];
    $scope.causa=[
        {name:"Excesso de velocidade",              id:"velocidade"},
        {name:"Uso de álcool/drogas",               id:"alcoolDrogas"},
        {name:"Imprudência do Condutor",            id:"imprudenciaCondutor"},
        {name:"Imperícia do Condutor",              id:"impericiaCondutor"},
        {name:"Problemas psicológicos",             id:"psicologico"},
        {name:"Imprudência do pedestre",            id:"imprudenciaPedestre"},
        {name:"Problemas do veículo",               id:"problemasVeiculo"},
        {name:"Problemas na infraestrutura ou via", id:"infraEstrutura"},
        {name:"Condições climáticas e visibilidade",id:"clima"},
        {name:"Fadiga ou distração",                id:"fadigaDistracao"},
        {name:"Outro",                              id:"outro"}
        ];
    $scope.causaSelecionados=[];
    $scope.obitos ={"infoGeral":$scope.geral,
                    "fatoresDeRisco":$scope.fatores,
                    "condutasDeRisco":$scope.condutas,
                    "usuario":$scope.usuario,
                    "outros":$scope.outros,
                    "orgaosResponsaveis":$scope.orgaosSelecionados,
                    "causa":$scope.causaSelecionados};

    $scope.toggleOrgaosSelection = function toggleOrgaosSelection(nomeOrgao){
        var idx = $scope.orgaosSelecionados.indexOf(nomeOrgao);

        if(idx > -1){
            $scope.orgaosSelecionados.splice(idx, 1);
        }else{
            $scope.orgaosSelecionados.push(nomeOrgao);
        }

    };

    $scope.toggleCausaSelection = function toggleCausaSelection(nomeCausa){
        var idx = $scope.causaSelecionados.indexOf(nomeCausa);

        if(idx > -1){
            $scope.causaSelecionados.splice(idx, 1);
        }else{
            $scope.causaSelecionados.push(nomeCausa);
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