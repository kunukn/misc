'use strict';

window.app = (function (angular) {

    var appVersion = 1;
    var app = angular.module('app', ['ngMaterial']);

    app.controller('mainController', ['$scope', function ($scope) {
        $scope.btnClick = function (e) {
            $scope.result = 'Clicked: ' + new Date().toLocaleString();
        };
    }]);

    return app;
})(angular, undefined);