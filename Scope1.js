/**
 * Created by Raoul on 2016/6/9.
 */
function GreetCtrl($scope,$rootScope) {
    $scope.name = 'World';
    $rootScope.department = 'Angular';
}
function ListCtrl($scope) {
    $scope.names = ['Igor' , 'Misko' , 'Vojta'];
}