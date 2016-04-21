// String formatter
'use strict';

if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}

window.app = (function () {

    var appVersion = 1;

    var templates = {
        a: {
            index: 'templates/a.html',
            aa: 'templates/aa.html',
            ab: 'templates/ab.html'
        },
        b: {
            index: 'templates/b.html',
            ba: 'templates/ba.html',
            bb: 'templates/bb.html'
        }
    };

    var app = angular.module('app', ['ui.router']);

    app.factory('storage', function () {
        return {
            from: '?',
            to: '?',
            getInfo: function getInfo() {
                return 'from {0} to {1}'.format(this.from || '?', this.to || '?');
            },
            input: ''
        };
    });

    app.run(['$rootScope', '$state', '$stateParams', '$templateCache', '$http', 'storage', function run($rootScope, $state, $stateParams, $templateCache, $http, storage) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
            $rootScope.previousState = from.name;
            $rootScope.currentState = to.name;
            storage.from = from.name;
            storage.to = to.name;
            //console.log('path from: {0} to: {1}'.format(from.name, to.name));
        });

        try {
            // Preload and cache template files
            $http.get('{0}?v={1}'.format(templates.a.index, appVersion), {
                cache: $templateCache
            });
            $http.get('{0}?v={1}'.format(templates.b.index, appVersion), {
                cache: $templateCache
            });
            // And the rest of the files...
        } catch (e) {
            console.error(e);
        }
    }]);

    var DefaultController = function DefaultController($scope, storage) {};

    app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('home', {
            url: '/',
            template: 'home',
            controller: ['$scope', 'storage', DefaultController]
        }).state('a', {
            url: '/a',
            templateUrl: templates.a.index,
            controller: ['$scope', 'storage', DefaultController]
        }).state('a.aa', {
            url: '/aa',
            templateUrl: templates.a.aa,
            controller: ['$scope', DefaultController]
        }).state('a.ab', {
            url: '/ab',
            templateUrl: templates.a.ab,
            controller: ['$scope', DefaultController]
        }).state('b', {
            url: '/b',
            templateUrl: templates.b.index,
            controller: ['$scope', 'storage', DefaultController]
        }).state('b.ba', {
            url: '/ba',
            templateUrl: templates.b.ba,
            controller: ['$scope', 'storage', DefaultController]

        }).state('b.bb', {
            url: '/bb',
            templateUrl: templates.b.bb,
            controller: ['$scope', 'storage', DefaultController]
        });
    }]);

    app.controller('mainController', ['$scope', 'storage', function ($scope, storage) {
        $scope.info = '';
        $scope.$watch(function () {
            return storage.from;
        }, function () {
            $scope.info = storage.getInfo();
        });
    }]);

    return app;
})(undefined);