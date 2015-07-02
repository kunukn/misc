;


(function setupAngular() {
        
        var appVersion = 1;

        var angularApp = angular
            .module('app', ['ui.router'])

        .run(
                ['$rootScope', '$state', '$stateParams', '$templateCache', '$http',
                function ($rootScope, $state, $stateParams, $templateCache, $http) {
                    $rootScope.$state = $state;
                    $rootScope.$stateParams = $stateParams;

                    $rootScope.$on('$stateChangeSuccess', function (ev, to, toParams, from, fromParams) {
                        $rootScope.previousState = from.name;
                        $rootScope.currentState = to.name;
                        //console.log('Previous state:' + $rootScope.previousState);
                        //console.log('Current state:' + $rootScope.currentState);
                    });

                    try {
                        // preload and cache template files
                        $http.get('templates/header-view.html?v=' + appVersion, { cache: $templateCache });
                        $http.get('templates/footer-view.html?v=' + appVersion, { cache: $templateCache });
                        $http.get('templates/home-page.html?v=' + appVersion, { cache: $templateCache });
                      
                    } catch (e) {
                        console.log(e);
                    }
                }
            ]
            )
            // Shared across controllers
            .factory('user', function() {
                return {
                    name: 'jimmy joe jane'
                };
            })

        .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$compileProvider', 
            function($urlRouterProvider, $stateProvider, $locationProvider, $compileProvider) {

            //if (!window.app.isLocalhost ) {
            //    $compileProvider.debugInfoEnabled(false); // better perfomance
            //}

            $urlRouterProvider.otherwise('/');

            // $locationProvider.html5Mode(true);  // mimic postback url even though it is a SPA

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'templates/home-page.html',
                    controller: function($scope, user) {
                        $scope.user = user;
                    }
                })
                ;
        }]);
   
})();
