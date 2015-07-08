;
'use strict';


(function(ng) {

    window.app = window.app || {};
    window.app.isotope = null;

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
            .module('app', ['ui.router', 'ngResource'])

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

                            $http.get('api/topics.json?v=' + appVersion, {});
                            $http.get('api/articles.json?v=' + appVersion, {});
                        } catch (e) {
                            console.log(e);
                        }
                    }
                ]
            )
            // Shared across controllers
            .factory('storage', function() {
                return window.app.storage;
            })

        .factory('articleService', function($resource) {
                return $resource('api/articles.json?v=' + appVersion);
            })
            .factory('topicService', function($resource) {
                return $resource('api/topics.json?v=' + appVersion);
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
                        templateUrl: frontpageArticleTemplates.articles,
                        controller: ['$scope', 'storage', 'articleService', function($scope, storage, articleService) {

                            articleService.get(function articleService(data) {
                                $scope.frontpageArticles = data[data.frontpageArticlesDefaultVolume] || [];
                            });

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
                            $scope.info = function(message) {
                                toastr.info(message);
                            }

                        }]
                    });
            }
        ])

        .controller('TopicsCtrl', ['$scope', 'storage', 'topicService', function($scope, storage, topicService) {

            topicService.get(function topicService(data) {
                $scope.topics = data.topics;
            });

            $scope.info = function(message) {

                message = message !== '*' ? '.' + message : '*';

                window.app.isotope.arrange({
                    filter: message
                });

                toastr.info(message);

                // $containerForIsotope.isotope({
                //     filter: message
                // });
                // quick test and see update, remove first item
                // cache.frontpageArticles.splice(0, 1);
                // $containerForIsotope.isotope();
            }
        }]);
    })();

    ng(document).ready(function() {
        (function setupIsotope() {
            setTimeout(function() {

                var articles = document.querySelector('.frontpage-articles');
                window.app.isotope = new Isotope(articles, {
                    // options
                    itemSelector: '.article',
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: 320
                    },
                    isInitLayout: false
                });
                window.app.isotope.layout();

            }, 1000); // wait until dom has been populated with data

        })();

        (function setupToastr() {
            if (window.toastr) {
                toastr.options.showMethod = 'slideDown';
                toastr.options.progressBar = true;
                toastr.options.positionClass = 'toast-bottom-right';
                toastr.options.tapToDismiss = true;
                toastr.options.fadeOut = 500;
                toastr.options.timeOut = 1500;
            }
        })();
    });

})(angular.element);
