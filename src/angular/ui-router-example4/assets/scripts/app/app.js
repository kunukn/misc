;

(function() {
    window.app = {
        title: 'angular testing',
        database: {
            data: 'some data'
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
                    $scope.data = app.database.data;
                    $scope.update = function() {
                        app.database.data = $scope.data;
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
