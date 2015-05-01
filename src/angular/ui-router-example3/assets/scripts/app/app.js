;

(function() {
    window.app = {
        title: 'angular testing',
        currentPerson: {},
        database: {
            persons: {
                person1: {
                    name: 'joe',
                    age: 20
                },
                person2: {
                    name: 'jim',
                    age: 30
                },
                person3: {
                    name: 'jack',
                    age: 40
                }
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

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'templates/login-page.html',
                controller: function($scope, $timeout) {

                    $scope.page = 'login';
                    $scope.setPerson = function(person) {
                        if (person === 'person1') {
                            window.app.currentPerson = database.persons.person1;
                        }
                        if (person === 'person2') {
                            window.app.currentPerson = database.persons.person2;
                        }
                        if (person === 'person3') {
                            window.app.currentPerson = database.persons.person3;
                        }
                    }
                }
            })
            .state('frontpage', {
                url: '/frontpage',
                templateUrl: 'templates/front-page.html',
                controller: function($scope) {
                    $scope.page = 'frontpage';
                    $scope.person = app.currentPerson;
                }
            })
            .state('subpage1', {
                url: '/subpage1',
                views: {
                    '': {
                        templateUrl: 'templates/subpages/sub1-page.html',
                        controller: function($scope) {
                        }
                    },
                    'topbar-view@subpage1': {
                        templateUrl: 'templates/subpages/topbar-view.html',
                        controller: function($scope) {
                            $scope.page = 'sub1';
                        }
                    },
                    'person-view@subpage1': {
                        templateUrl: 'templates/subpages/person-view.html',
                        controller: function($scope) {
                            $scope.person = app.currentPerson;
                        }
                    }
                }
            })
            .state('subpage2', {
                url: '/subpage2',
                views: {
                    '': {
                        templateUrl: 'templates/subpages/sub2-page.html',
                        controller: function($scope) {
                        }
                    },
                    'topbar-view@subpage2': {
                        templateUrl: 'templates/subpages/topbar-view.html',
                        controller: function($scope) {
                            $scope.page = 'sub2';
                        }
                    },
                    'person-view@subpage2': {
                        templateUrl: 'templates/subpages/person-view.html',
                        controller: function($scope) {
                            $scope.person = app.currentPerson;
                        }
                    }
                }
            })
            .state('subpage3', {
                url: '/subpage3',
                views: {
                    '': {
                        templateUrl: 'templates/subpages/sub3-page.html',
                        controller: function($scope) {
                        }
                    },
                    'topbar-view@subpage3': {
                        templateUrl: 'templates/subpages/topbar-view.html',
                        controller: function($scope) {
                            $scope.page = 'sub3';
                        }
                    },
                    'person-view@subpage3': {
                        templateUrl: 'templates/subpages/person-view.html',
                        controller: function($scope) {
                            $scope.person = app.currentPerson;
                        }
                    }
                }
            })
            .state('subpage4', {
                url: '/subpage4',
                views: {
                    '': {
                        templateUrl: 'templates/subpages/sub4-page.html',
                        controller: function($scope) {
                        }
                    },
                    'topbar-view@subpage4': {
                        templateUrl: 'templates/subpages/topbar-view.html',
                        controller: function($scope) {
                            $scope.page = 'sub4';
                        }
                    },
                    'person-view@subpage4': {
                        templateUrl: 'templates/subpages/person-view.html',
                        controller: function($scope) {
                            $scope.person = app.currentPerson;
                        }
                    }
                }
            })
            .state('subpage5', {
                url: '/subpage5',
                views: {
                    '': {
                        templateUrl: 'templates/subpages/sub5-page.html',
                        controller: function($scope) {
                        }
                    },
                    'topbar-view@subpage5': {
                        templateUrl: 'templates/subpages/topbar-view.html',
                        controller: function($scope) {
                            $scope.page = 'sub5';
                        }
                    },
                    'person-view@subpage5': {
                        templateUrl: 'templates/subpages/person-view.html',
                        controller: function($scope) {
                            $scope.person = app.currentPerson;
                        }
                    }
                }
            })
            .state('subpage6', {
                url: '/subpage6',
                views: {
                    '': {
                        templateUrl: 'templates/subpages/sub6-page.html',
                        controller: function($scope) {
                        }
                    },
                    'topbar-view@subpage6': {
                        templateUrl: 'templates/subpages/topbar-view.html',
                        controller: function($scope) {
                            $scope.page = 'sub6';
                        }
                    },
                    'person-view@subpage6': {
                        templateUrl: 'templates/subpages/person-view.html',
                        controller: function($scope) {
                            $scope.person = app.currentPerson;
                        }
                    }
                }
            });
    }]);
})();
