;
'use strict';


(function(ng, d, w) {

    w.app = w.app || {};
    w.app.storage = {
        frontpageArticles: []
    };
    w.app.isotope = null;
    w.app.util = {
        getClientWidth: function() {
            return w.innerWidth || d.documentElement.clientWidth || d.body.clientWidth;
        },
        isMenuButtonVisible: function() {
            return this.getClientWidth() < 800; // breakpoint
        }
    };

    (function setupAngular() {

        var appVersion = 1;

        var mainTemplates = {
                header: 'templates/header-view.html',
                footer: 'templates/footer-view.html'
            },
            frontpageArticleTemplates = {
                articles: 'templates/frontpage/articles-page.html',
                basic: 'templates/frontpage/article-basic-view.html',
                popup: 'templates/frontpage/article-popup-view.html',
                video: 'templates/frontpage/article-video-view.html'
            },
            articleDetailTemplates = {
                bigImage: 'templates/article-detail/big-image-view.html',
                smallImage: 'templates/article-detail/small-image-view.html',
                carousel: 'templates/article-detail/carousel-view.html'
            };

        var angularApp = angular
            .module('app', ['ui.router', 'ngResource', 'ngAnimate'])

        .run(
                ['$rootScope', '$state', '$stateParams', '$templateCache', '$http',
                    function run($rootScope, $state, $stateParams, $templateCache, $http) {
                        $rootScope.$state = $state;
                        $rootScope.$stateParams = $stateParams;

                        $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
                            $rootScope.previousState = from.name;
                            $rootScope.currentState = to.name;
                        });

                        try {
                            // preload and cache template files

                            // main
                            $http.get(mainTemplates.header + '?v=' + appVersion, {
                                cache: $templateCache
                            });
                            $http.get(mainTemplates.footer + '?v=' + appVersion, {
                                cache: $templateCache
                            });

                            // frontpage
                            $http.get(frontpageArticleTemplates.articles + '?v=' + appVersion, {
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

                            // article detail
                            $http.get(articleDetailTemplates.bigImage + '?v=' + appVersion, {
                                cache: $templateCache
                            });
                            $http.get(articleDetailTemplates.smallImage + '?v=' + appVersion, {
                                cache: $templateCache
                            });
                            $http.get(articleDetailTemplates.carousel + '?v=' + appVersion, {
                                cache: $templateCache
                            });

                            // Stub, mimic data from server
                            $http.get('api/topics.json?v=' + appVersion, {
                                cache: true
                            });
                            $http.get('api/articles.json?v=' + appVersion, {
                                cache: true
                            });
                        } catch (e) {
                            console.log(e);
                        }
                    }
                ]
            )
            // Shared across controllers
            .factory('storage', function() {
                return w.app.storage;
            })

        .factory('articleService', function($resource) {
            return $resource('api/articles.json?v=' + appVersion, {}, {
                getFrontpageArticles: {
                    method: "GET",
                    cache: true
                }
            });
        })

        .factory('topicService', function($resource) {
            return $resource('api/topics.json?v=' + appVersion, {}, {
                get: {
                    method: "GET",
                    cache: true
                }
            });
        })


        .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$compileProvider',
            function config($urlRouterProvider, $stateProvider, $locationProvider, $compileProvider) {

                //if (!window.app.isLocalhost ) {
                //    $compileProvider.debugInfoEnabled(false); // better perfomance
                //}

                $urlRouterProvider.otherwise('/');

                // $locationProvider.html5Mode(true);  // mimic postback url even though it is a SPA

                $stateProvider
                    .state('home', {
                        url: '/',
                        templateUrl: frontpageArticleTemplates.articles,
                        controller: ['$scope', '$timeout', 'storage', 'articleService', function($scope, $timeout, storage, articleService) {

                            $scope.$watch(function() {
                                    return storage.frontpageArticles;
                                },
                                function() {
                                    $scope.frontpageArticles = storage.frontpageArticles;

                                    $scope.fadein = true;
                                    $timeout(function() {
                                        $scope.fadein = false;
                                    }, 3000);

                                    $timeout(function() {

                                        var articles = d.querySelector('.frontpage-articles');
                                        w.app.isotope = new Isotope(articles, {
                                            // options
                                            itemSelector: '.article',
                                            layoutMode: 'masonry',
                                            masonry: {
                                                columnWidth: 320
                                            },
                                            isInitLayout: false
                                        });
                                        w.app.isotope.arrange();

                                    }, 500); // give angular n millisecond to update data binding before invoking isotope update
                                }
                            );

                            articleService.getFrontpageArticles(function(data) {
                                storage.frontpageArticles = data[data.frontpageArticlesDefaultVolume] || [];
                                $scope.volumes = data.frontpageArticlesAllVolumes || [];
                            });

                            $scope.getVolume = function(volume) {
                                $scope.fadein = true;
                                $timeout(function() {
                                    $scope.fadein = false;
                                }, 3000);

                                articleService.getFrontpageArticles(function(data) {
                                    storage.frontpageArticles = data[volume] || [];
                                });
                            };

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
                            // $scope.info = function(message) {
                            //     console.log(message);
                            // }
                            $scope.popup = function(id) {
                                console.log(id);
                            }

                        }]
                    });
            }
        ])

        .controller('TopicsCtrl', ['$scope', 'storage', 'topicService', 'articleService', function($scope, storage, topicService, articleService) {

            topicService.get(function(data) {
                $scope.topics = data.topics;
            });

            $scope.isMenuDisplayed = !w.app.util.isMenuButtonVisible();
            $scope.toggleMenu = function() {
                $scope.isMenuDisplayed = !$scope.isMenuDisplayed;
                console.log("toggle menu - " + $scope.isMenuDisplayed);
            }

            $scope.getTopic = function(topic) {
                articleService.get(function(data) {
                    // todo refactor, cleanup
                    if (topic === '*') {
                        storage.frontpageArticles = data[data.frontpageArticlesDefaultVolume] || [];
                    } else if (topic === 'tag-corporate') {
                        storage.frontpageArticles = data.frontpageArticlesCorporate;
                    } else if (topic === 'tag-customers') {
                        storage.frontpageArticles = data.frontpageArticlesCustomers
                    } else if (topic === 'tag-financials') {
                        storage.frontpageArticles = data.frontpageArticlesFinancials
                    } else if (topic === 'tag-technology') {
                        storage.frontpageArticles = data.frontpageArticlesTechnology
                    } else if (topic === 'tag-nnit-way') {
                        storage.frontpageArticles = data.frontpageArticlesNnitWay
                    }
                });

                if (w.app.util.isMenuButtonVisible()) {
                    $scope.isMenuDisplayed = false;
                }
            };
        }]);
    })();

    // document ready
    ng(d).ready(function() {

    });

})(angular.element, document, window, undefined);
