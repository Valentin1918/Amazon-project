app.controller('HomePage', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    $scope.fileName = 'superfile';
    $scope.someData = [];
    $scope.updateSomeData = function() {
        $http({
            method: 'GET',
            url: 'assets/js/' + $scope.fileName + '.txt'
        }).then(function successCallback(response) {
            var answer = response.data.trim();
            var cutCommas = function() {
                if(answer[answer.length - 1] === ',') {
                    answer = answer.substr(0, answer.length - 1);
                    cutCommas();
                }
            };
            cutCommas();
            var answer = '[' + answer + ']';
            $scope.someData = JSON.parse(answer);
        }, function errorCallback(response) {
            console.log(response);
        });
    };
    $interval($scope.updateSomeData, 1000);
}]);
