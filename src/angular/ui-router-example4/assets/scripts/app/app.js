;

(function() {
    window.app = {
        database: {
            wizard1: {
                date: '01.01.2015',
                parent: 'parent1',
                workStatus: 'employed'
            },
            wizard2: {

            },
            wizard3: {

            },
            wizard4: {

            }
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

                    $scope.model = database.wizard1;
                    $scope.dateChange = function() {
                        //console.log(this);
                        database.wizard1.date = this.model.date;
                    }
                    $scope.parentChange = function() {
                        //console.log(this);
                        database.wizard1.parent = this.model.parent;
                    }
                    $scope.workStatusChange = function() {
                        //console.log(this);
                        database.wizard1.workStatus = this.model.workStatus;
                    }
                    $scope.prevPage = function() {
                        console.log('prevPage');
                    }
                    $scope.nextPage = function() {
                        console.log('nextPage');
                    }
                }
            })
            .state('wizard2', {
                url: '/wizard2',
                templateUrl: 'templates/wizard/wizard2-page.html',
                controller: function($scope, $timeout) {
                    $scope.model = database.wizard2;
                    $scope.prevPage = function() {
                        console.log('prevPage');
                    }
                    $scope.nextPage = function() {
                        console.log('nextPage');
                    }
                }
            })
            .state('wizard3', {
                url: '/wizard3',
                templateUrl: 'templates/wizard/wizard3-page.html',
                controller: function($scope, $timeout) {
                    $scope.model = database.wizard3;
                    $scope.prevPage = function() {
                        console.log('prevPage');
                    }
                    $scope.nextPage = function() {
                        console.log('nextPage');
                    }
                }
            })
            .state('wizard4', {
                url: '/wizard4',
                templateUrl: 'templates/wizard/wizard4-page.html',
                controller: function($scope, $timeout) {
                    $scope.model = database.wizard4;
                    $scope.prevPage = function() {
                        console.log('prevPage');
                    }
                    $scope.nextPage = function() {
                        console.log('nextPage');
                    }
                }
            })
            ;
    }]);
})();
