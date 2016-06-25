/**
 * Created by raoul on 2016/6/8.
 */
function CommonController($scope) {
    $scope.commFn=function () {
        alert("This Is Common Part!!!");
    };
}
function Controller1($scope) {
    $scope.greeting={
        text: 'Hello1'
    };
    $scope.test1=function () {
        alert("This Is Test1 Part!!!")
    }
}
function Controller2($scope) {
    $scope.greeting={
        text: 'Hello2'
    };
    $scope.test2=function () {
        alert("This Is Test2 Part!!!")
    }
}