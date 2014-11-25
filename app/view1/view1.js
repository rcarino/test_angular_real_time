'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['$scope', '$http', function ($scope, $http) {
        $http.get('api/notifications.json')
            .then(function (response) {
                $scope.notificationsResponse = response.data;
                setInterval(function() {
                    $scope.notificationsResponse.update_number += 1;
                    $scope.$apply();
                }, 2000);
            });
    }]);