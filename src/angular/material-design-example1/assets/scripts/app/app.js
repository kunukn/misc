'use strict';

var app = undefined;

(function (angular) {

    app = angular.module('app', ['ngMaterial']).controller('mainController', ['$scope', function ($scope) {
        $scope.btnClick = function (e) {
            $scope.message = "clicked: " + new Date().toLocaleString();
        };
    }]);
})(angular, undefined);