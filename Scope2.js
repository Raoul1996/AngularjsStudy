/**
 * Created by Raoul on 2016/6/9.
 */
function EventController($scope) {
    $scope.count = 0;
    $scope.$on('MyEvent',function () {
        $scope.count++;
    });
}