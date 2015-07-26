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
        },
        isLocalhost: !!location.host.match(/localhost/)
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
                layout: 'templates/article-detail/layout-page.html',
                bigImage: 'templates/article-detail/big-image-view.html',
                smallImage: 'templates/article-detail/small-image-view.html',
                carousel: 'templates/article-detail/carousel-view.html'
            };

        // todo manybe ngAnimate is not needed
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
                            $http.get(articleDetailTemplates.layout + '?v=' + appVersion, {
                                cache: $templateCache
                            });
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

                    .state('article', {
                        url: '/article/{id}',
                        templateUrl: articleDetailTemplates.layout,
                        controller: ['$scope', '$state', '$timeout', '$stateParams', 'storage', 'articleService', function($scope, $state, $timeout, $stateParams, storage, articleService) {
                            $scope.closeArticleDetail = function() {
                                $state.go('home');
                            };

                            // todo load data for detail and use the correct template and set scope data
                            console.log($stateParams.id);
                            $scope.articleDetailView = articleDetailTemplates.bigImage;
                        }]
                    })
                    .state('home', {
                        url: '/',
                        views: {
                            '': {
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
                                            }, 2000);

                                            // Articles must exists in DOM first.
                                            // Give angular n millisecond to update data binding before invoking isotope update
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

                                            }, 500);
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
                                        }, 2000);

                                        $timeout(function() {
                                            articleService.getFrontpageArticles(function(data) {
                                                storage.frontpageArticles = data[volume] || [];
                                            });
                                        }, 0);
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

                                    $scope.closeArticleDetail = function() {
                                        $scope.showPopupWindow = false;
                                    };

                                    $scope.articleDetailTemplate = articleDetailTemplates.layout;

                                    $scope.popup = function(id) {

                                        // todo load data for detail and use the correct template and set scope data
                                        console.log(id);
                                        $scope.showPopupWindow = true;
                                        $scope.articleDetailView = articleDetailTemplates.bigImage;
                                    }
                                    $scope.video = function(id) {
                                        console.log('video ' + id);
                                    }

                                }]
                            },
                            'subpage@home': {
                                template: 'I am a dummy subpage'
                            }
                        }


                    })


                ;
            }
        ])

        .controller('TopicsCtrl', ['$scope', 'storage', 'topicService', 'articleService', function($scope, storage, topicService, articleService) {

            topicService.get(function(data) {
                $scope.topics = data.topics;
            });

            $scope.isMenuDisplayed = !w.app.util.isMenuButtonVisible();
            $scope.toggleMenu = function() {
                $scope.isMenuDisplayed = !$scope.isMenuDisplayed;
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
