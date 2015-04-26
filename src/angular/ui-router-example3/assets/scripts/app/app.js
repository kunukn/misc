window.app = {
    title: 'angular testing'
};


(function() {

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

                    $scope.data = 'login';
                    $scope.setPerson = function(person){
                        window.app.person = person;
                    }

                    // polling
                    // (function update() {
                    //     $timeout(update, 2000);
                    //     $scope.data = 'login ' + new Date().getTime();
                    // }());
                }
            })
            .state('frontpage', {
                url: '/frontpage',
                templateUrl: 'templates/front-page.html',
                controller: function($scope) {
                    $scope.data = 'frontpage';
                    $scope.person = window.app.person;
                }
            })
            .state('subpage1', {
                url: '/subpage1',
                templateUrl: 'templates/sub1-page.html',
                controller: function($scope) {
                    $scope.data = 'sub1';
                    $scope.person = window.app.person;
                }
            })
            .state('subpage2', {
                url: '/subpage2',
                templateUrl: 'templates/sub2-page.html',
                controller: function($scope) {
                    $scope.data = 'sub2';
                    $scope.person = window.app.person;
                }
            })
            .state('subpage3', {
                url: '/subpage3',
                templateUrl: 'templates/sub3-page.html',
                controller: function($scope) {
                    $scope.data = 'sub3';
                    $scope.person = window.app.person;
                }
            })
            .state('subpage4', {
                url: '/subpage4',
                templateUrl: 'templates/sub4-page.html',
                controller: function($scope) {
                    $scope.data = 'sub4';
                    $scope.person = window.app.person;
                }
            })
            .state('subpage5', {
                url: '/subpage5',
                templateUrl: 'templates/sub5-page.html',
                controller: function($scope) {
                    $scope.data = 'sub5';
                    $scope.person = window.app.person;
                }
            })
            .state('subpage6', {
                url: '/subpage6',
                templateUrl: 'templates/sub6-page.html',
                controller: function($scope) {
                    $scope.data = 'sub6';
                    $scope.person = window.app.person;
                }
            })
            ;
    }]);
})();
