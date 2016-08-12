app.controller('HomePage', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    $scope.fileName = 'superfile';
    $scope.someData = [];
    $scope.updateSomeData = function() {
        $http({
            method: 'GET',
            url: 'assets/js/' + $scope.fileName + '.json'
        }).then(function successCallback(response) {
            $scope.someData = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });
    };
    $interval($scope.updateSomeData, 1000);
}]);
