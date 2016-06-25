//污染了全局变量

function HelloAngular($scope) {
    $scope.greeting = {
        text: 'Bao Chou'
    };
}

//模块化
// var helloModel = angular.module('HelloAngular',[]);
// helloModel.controller('helloNgCtrl',['$scope',function ($scope) {
//     $scope.greeting = {
//         text:'BaoChou'
//     };
// }]);