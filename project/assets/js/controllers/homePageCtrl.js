app.controller('HomePage', ['$scope', '$rootScope', '$cookies', '$location', 'httpGetQuery', function($scope, $rootScope, $cookies, $location, httpGetQuery) {

    $scope.fileName = 'superfile';
    $scope.someDataPromiseGet = httpGetQuery.getData('assets/js/' + $scope.fileName + '.json');
    $scope.someDataPromiseGet.then(function(value) {
        console.log('object is retrieved, reply is:');
        console.log(value); //{"value": "", "img": "", "id": "123", "name": "string"}
        $scope.someData = value;
    });
    
}]);
