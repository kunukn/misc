;
'use strict';

(function setupAngular() {

    var appVersion = 1;

    var mainTemplates = {
            header: 'templates/header-view.html',
            articles: 'templates/frontpage-articles-page.html',
            footer: 'templates/footer-view.html'
        },
        frontpageArticleTemplates = {
            basic: 'templates/frontpage-article-basic-view.html',
            popup: 'templates/frontpage-article-popup-view.html',
            video: 'templates/frontpage-article-video-view.html'
        };

    var angularApp = angular
        .module('app', ['ui.router'])

    .run(
            ['$rootScope', '$state', '$stateParams', '$templateCache', '$http',
                function($rootScope, $state, $stateParams, $templateCache, $http) {
                    $rootScope.$state = $state;
                    $rootScope.$stateParams = $stateParams;

                    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
                        $rootScope.previousState = from.name;
                        $rootScope.currentState = to.name;
                    });

                    try {
                        // preload and cache template files
                        $http.get(mainTemplates.header + '?v=' + appVersion, {
                            cache: $templateCache
                        });
                        $http.get(mainTemplates.articles + '?v=' + appVersion, {
                            cache: $templateCache
                        });
                        $http.get(mainTemplates.footer + '?v=' + appVersion, {
                            cache: $templateCache
                        });
                        $http.get(frontpageArticleTemplates.basic + '?v=' + appVersion, {
                            cache: $templateCache
                        });
                        $http.get(frontpageArticleTemplates.popup + '?v=' + appVersion, {
                            cache: $templateCache
                        });
                        $http.get(frontpageArticleTemplates.video + '?v=' + appVersion, {
                            cache: $templateCache
                        });


                    } catch (e) {
                        console.log(e);
                    }
                }
            ]
        )
        // Shared across controllers
        .factory('cache', function() {
            return {
                topics: [{
                    title: 'All',
                    value: '*'
                }, {
                    title: 'Corporate',
                    value: 'tag-corporate'
                }, {
                    title: 'Customers',
                    value: 'tag-customers'
                }, {
                    title: 'Financials',
                    value: 'tag-financials'
                }, {
                    title: 'Technology',
                    value: 'tag-technology'
                }, {
                    title: 'NNIT Way',
                    value: 'tag-nnit-way'
                }],


                frontpageArticles: [{
                    type: 'basic',
                    width: 'x1',
                    title: 'article 1',
                    description: 'description 1'
                }, {
                    type: 'popup',
                    width: 'x2',
                    title: 'article 2',
                    description: 'description 2'
                }, {
                    type: 'video',
                    width: 'x1',
                    title: 'article 3',
                    description: 'description 3'
                }, {
                    type: 'basic',
                    width: 'x1',
                    title: 'article 4',
                    description: 'description 4'
                }, {
                    type: 'popup',
                    width: 'x2',
                    title: 'article 5',
                    description: 'description 5'
                }, {
                    type: 'carousel',
                    width: 'x2',
                    title: 'article 6',
                    description: 'description 6'
                }],

                frontpageTemplates: {
                    basic: 'templates/frontpage-article-basic-view.html',
                    popup: 'templates/frontpage-article-popup-view.html',
                    video: 'templates/frontpage-article-video-view.html'
                }
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
                    templateUrl: 'templates/frontpage-articles-page.html',
                    controller: ['$scope', 'cache', function($scope, cache) {
                        $scope.frontpageArticles = cache.frontpageArticles || [];
                        $scope.getFrontpageArticleTemplate = function(type) {
                            switch (type) {
                                case "basic":
                                    return frontpageArticleTemplates.basic;
                                case "popup":
                                    return frontpageArticleTemplates.popup;
                                case "video":
                                    return frontpageArticleTemplates.video;
                            }
                            return frontpageArticleTemplates.basic;
                        };

                    }]
                });
        }
    ])

    .controller('TopicsCtrl', function($scope, cache) {
        $scope.topics = cache.topics;
        $scope.topicClick = function(topic) {
            toastr.info(topic);
        };
    })

    ;

    if (window.toastr) {
        toastr.options.showMethod = 'slideDown';
        toastr.options.progressBar = true;
        toastr.options.positionClass = 'toast-bottom-right';
        toastr.options.tapToDismiss = true;
        toastr.options.fadeOut = 500;
        toastr.options.timeOut = 1500;
    }

})();
