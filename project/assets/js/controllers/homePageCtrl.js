app.controller('HomePage', ['$scope', '$http', '$interval', '$location', function($scope, $http, $interval, $location) {
    $location.search('fileName', 'superfile');
    /*
    http://192.168.2.1/index.html?fileName=superfile.txt

    function $_GET(q,s) {
        console.log(window.location);
        s = s ? s : window.location.search;
        var re = new RegExp('&' + q + '(?:=([^&]*))?(?=&|$)','i');
        return (s = s.replace(/^?/,'&').match(re)) ? (typeof s[1] == 'undefined' ? '' : decodeURIComponent(s[1])) : undefined;
    }
     */
    var searchObject = $location.search();
    console.log(searchObject.fileName);
    //$scope.fileName = 'superfile';
    //$scope.fileName = $_GET('fileName'); //'superfile'
    $scope.fileName =  searchObject.fileName;
    console.log($scope.fileName);
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
