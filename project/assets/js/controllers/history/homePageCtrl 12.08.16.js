app.controller('HomePage', ['$scope', '$rootScope', '$http', '$cookies', '$location', '$interval', 'httpGetQuery', function($scope, $rootScope, $http, $cookies, $location, $interval, httpGetQuery) {
    $scope.fileName = 'superfile';
    $scope.someData = [];


    function objectsAreSame(x, y) {
        var objectsAreSame = true;
        for(var propertyName in x) {
            if(x[propertyName] !== y[propertyName]) {
                objectsAreSame = false;
                break;
            }
        }
        return objectsAreSame;
    }



    $scope.updateSomeData = function() {
        $http({
            method: 'GET',
            url: 'assets/js/' + $scope.fileName + '.json'
        }).then(function successCallback(response) {
            //console.log('object is retrieved, reply is:');
            //console.log(response.data);
            $scope.someData = response.data;
            /*
            if($scope.someData.length === response.data.length) {
                var i;
                for(i = response.data.length; i--;) {
                    if(objectsAreSame(response.data[i], $scope.someData[i])) {
                        console.log('do nothing');
                    }else {
                        $scope.someData = response.data;
                        console.log('do something');
                        break;
                    }
                }

            }else {
                $scope.someData = response.data;
                console.log('do something');
            }
            */
        }, function errorCallback(response) {
            console.log(response);
        });
    };
    /*
    $scope.someDataPromiseGet = httpGetQuery.getData('assets/js/' + $scope.fileName + '.json');
    $scope.updateSomeData = function() {
        $scope.someDataPromiseGet.then(function(value) {
            console.log('object is retrieved, reply is:');
            $scope.someData = value;
        });
    };
    $scope.updateSomeData();
    */
    /*
    $scope.$watch('someData', function() {
        console.log('tralala');
    });
    */

    $interval($scope.updateSomeData, 1000);




    
}]);
