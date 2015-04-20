(function() {

    var app =
        angular
        .module('app', ['ui.router'])
        .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'templates/home.html',
                    controller: 'homeCtrl',
                    resolve: {
                        friends: ['$http', function($http) {
                            return $http.get('/api/friends.json').then(function(response) {
                                return response.data;
                            })
                        }]
                    }
                })
                .state('about', {
                    url: '/about',
                    templateUrl: 'templates/about.html',
                    controller: 'aboutCtrl'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'templates/contact.html',
                    resolve: {
                        friends: ['Friends', function(Friends) {
                            return Friends.get();
                        }]
                    },
                    controller: function($scope, friends) {
                        $scope.friends = friends;
                    }
                })

            ;
        }]);
})();
