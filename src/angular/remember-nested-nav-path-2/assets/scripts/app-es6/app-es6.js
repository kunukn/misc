// String formatter
if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}

window.app = (() => {

    const appVersion = 1;

    const templates = {
        home: 'templates/home.html',
        a: {
            index: 'templates/a.html',
            aa: 'templates/aa.html',
            ab: 'templates/ab.html',
            ac: 'templates/ac.html',
            aaa: 'templates/aaa.html',
            aab: 'templates/aab.html',
            aac: 'templates/aac.html',
            aba: 'templates/aba.html',
            abb: 'templates/abb.html',
            abc: 'templates/abc.html',
            aca: 'templates/aca.html',
            acb: 'templates/acb.html',
            acc: 'templates/acc.html'
        },
        b: {
            index: 'templates/b.html',
            ba: 'templates/ba.html',
            bb: 'templates/bb.html',
            bc: 'templates/bc.html',
            baa: 'templates/baa.html',
            bab: 'templates/bab.html',
            bac: 'templates/bac.html',
            bba: 'templates/bba.html',
            bbb: 'templates/bbb.html',
            bbc: 'templates/bbc.html',
            bca: 'templates/bca.html',
            bcb: 'templates/bcb.html',
            bcc: 'templates/bcc.html'
        },
        c: {
            index: 'templates/c.html',
            ca: 'templates/ca.html',
            cb: 'templates/cb.html',
            cc: 'templates/cc.html',
            caa: 'templates/caa.html',
            cab: 'templates/cab.html',
            cac: 'templates/cac.html',
            cba: 'templates/cba.html',
            cbb: 'templates/cbb.html',
            cbc: 'templates/cbc.html',
            cca: 'templates/cca.html',
            ccb: 'templates/ccb.html',
            ccc: 'templates/ccc.html'
        }
    };

    let app = angular.module('app', ['ui.router']);

    app.factory('storage', () => {
        return {
            from: '?',
            to: '?',
            getInfo: function() {
                return 'from {0} to {1}'.format(this.from || '?', this.to || '?');
            },
            input: ''
        };
    });

    app.run(['$rootScope', '$state', '$stateParams', '$templateCache', '$http', 'storage',
        function run($rootScope, $state, $stateParams, $templateCache, $http, storage) {

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

            $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
                $rootScope.previousState = from.name;
                $rootScope.currentState = to.name;
                storage.from = from.name;
                storage.to = to.name;
                //console.log('path from: {0} to: {1}'.format(from.name, to.name));
            });

            try {
                // Preload and cache template files

                $http.get('{0}?v={1}'.format(templates.home, appVersion), {
                    cache: $templateCache
                });
                $http.get('{0}?v={1}'.format(templates.a.index, appVersion), {
                    cache: $templateCache
                });
                $http.get('{0}?v={1}'.format(templates.b.index, appVersion), {
                    cache: $templateCache
                });
                $http.get('{0}?v={1}'.format(templates.c.index, appVersion), {
                    cache: $templateCache
                });

                // And the rest of the files...

            } catch (e) {
                console.error(e);
            }
        }
    ])


    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: templates.home,
                controller: ['$scope', 'storage', function($scope, storage) {}]
            })
            .state('a', {
                url: '/a',
                templateUrl: templates.a.index,
                controller: ['$scope', 'storage', function($scope, storage) {}]
            })
            .state('a.aa', {
                url: '/aa',
                templateUrl: templates.a.aa,
                controller: ['$scope', function($scope) {}]
            })
            .state('a.aa.aaa', {
                url: '/aaa',
                templateUrl: templates.a.aaa,
                controller: ['$scope', 'storage', function($scope, storage) {
                    $scope.input = storage.input;
                    $scope.update = () => {
                        storage.input = $scope.input;
                    };
                }]
            })
            .state('a.aa.aab', {
                url: '/aab',
                templateUrl: templates.a.aab,
                controller: ['$scope', 'storage', function($scope, storage) {
                    $scope.input = storage.input;
                    $scope.update = () => {
                        storage.input = $scope.input;
                    };
                }]
            })
            .state('a.ab', {
                url: '/ab',
                templateUrl: templates.a.ab,
                controller: ['$scope', function($scope) {}]
            })
            .state('a.ab.aba', {
                url: '/aba',
                templateUrl: templates.a.aba,
                controller: ['$scope', function($scope) {}]
            })
            .state('a.ab.abb', {
                url: '/abb',
                templateUrl: templates.a.abb,
                controller: ['$scope', function($scope) {}]
            })
            .state('a.ab.abc', {
                url: '/abc',
                templateUrl: templates.a.abc,
                controller: ['$scope', function($scope) {}]
            })
            .state('b', {
                url: '/b',
                templateUrl: templates.b.index,
                controller: ['$scope', 'storage', function($scope, storage) {}]
            })
            .state('b.ba', {
                url: '/ba',
                templateUrl: templates.b.ba,
                controller: ['$scope', function($scope) {}]
            })
            .state('b.ba.baa', {
                url: '/baa',
                templateUrl: templates.b.baa,
                controller: ['$scope', 'storage', function($scope, storage) {
                    $scope.input = storage.input;
                    $scope.update = () => {
                        storage.input = $scope.input;
                    };
                }]
            })
            .state('b.ba.bab', {
                url: '/bab',
                templateUrl: templates.b.bab,
                controller: ['$scope', function($scope) {}]
            })
            .state('b.ba.bac', {
                url: '/bac',
                templateUrl: templates.b.bac,
                controller: ['$scope', function($scope) {}]
            })
            .state('b.bb', {
                url: '/bb',
                templateUrl: templates.b.bb,
                controller: ['$scope', function($scope) {}]
            })
            .state('c', {
                url: '/c',
                templateUrl: templates.c.index,
                controller: ['$scope', 'storage', function($scope, storage) {}]
            })

        ;
    }]);

    app.controller('mainController', ['$scope', 'storage', function($scope, storage) {
        $scope.info = '';
        $scope.$watch(() => {
            return storage.from;
        }, () => {
            $scope.info = storage.getInfo();
        });
    }]);

    return app;

})(undefined);
