var appData = {
    title: 'angular testing'
};


(function() {

    var app = angular
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
                templateUrl: 'templates/login.html',
                controller: function($scope, $timeout) {
                    //$state.go($state.current, {}, {reload: true}); //second parameter is for $stateParams
                    $scope.data = 'login';

                    (function update() {
                        $timeout(update, 2000);
                        $scope.data = 'login ' + new Date().getTime();
                    }());

                }
            })
            .state('frontpage', {
                url: '/frontpage',
                templateUrl: 'templates/frontpage.html',
                controller: function($scope) {
                    $scope.data = 'frontpage';
                }
            })
            .state('subpage1', {
                url: '/subpage1',
                templateUrl: 'templates/subpage1.html',
                controller: function($scope) {
                    $scope.data = 'subpage1';
                }
            })
            .state('subpage2', {
                url: '/subpage2',
                templateUrl: 'templates/subpage2.html',
                controller: function($scope) {
                    $scope.data = 'subpage2';
                }
            });
    }]);
})();
