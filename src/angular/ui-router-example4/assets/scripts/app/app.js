;

(function() {
    window.app = {
        title: 'angular testing',
        database: {
            wizard1: {
                date: '01.01.2015'
            },
            data: ''
        }
    };
})();

(function() {

    // Import
    var app = window.app;
    var database = window.app.database;

    var angularApp = angular
        .module('app', ['ui.router'])

    .run(
        ['$rootScope', '$state', '$stateParams',
            function($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )

    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$compileProvider', function($urlRouterProvider, $stateProvider, $locationProvider, $compileProvider) {

        if (!location.host.match(/localhost/)) {
            $compileProvider.debugInfoEnabled(false);
        }

        $urlRouterProvider.otherwise('/');

        // $locationProvider.html5Mode(true);

        $stateProvider
            .state('wizard1', {
                url: '/',
                templateUrl: 'templates/wizard/wizard1-page.html',
                controller: function($scope, $timeout) {
                    $scope.page = 'wizard1';
                    $scope.date = app.database.wizard1.date;
                    $scope.update = function(e) {
                       // app.database.data = $scope.data;
                    }
                    $scope.dateChange = function(e) {
                        app.database.wizard1.date = this.date;
                    }
                }
            })
            .state('wizard2', {
                url: '/wizard2',
                templateUrl: 'templates/wizard/wizard2-page.html',
                controller: function($scope, $timeout) {
                    $scope.page = 'wizard2';
                }
            })
            .state('wizard3', {
                url: '/wizard3',
                templateUrl: 'templates/wizard/wizard3-page.html',
                controller: function($scope, $timeout) {
                    $scope.page = 'wizard3';
                }
            });
    }]);
})();
