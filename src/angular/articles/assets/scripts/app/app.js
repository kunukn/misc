﻿;
'use strict';


(function($, ng) {

    var $containerForIsotope;

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
                        controller: ['$scope', 'storage', function($scope, storage) {
                            $scope.frontpageArticles = storage[storage.frontpageArticlesDefaultVolume] || [];
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

        .controller('TopicsCtrl', function($scope, storage) {
            $scope.topics = storage.topics;
            $scope.info = function(message) {
                toastr.info(message);

                message = message !== '*' ? '.' + message : '*';

                $containerForIsotope.isotope({
                    filter: message
                });
                // quick test and see update, remove first item
                // cache.frontpageArticles.splice(0, 1);
                // $containerForIsotope.isotope();
            }
        });
    })();

    ng(document).ready(function() {
        (function setupIsotope() {
            setTimeout(function() {

                $containerForIsotope = $('.frontpage-articles').isotope({
                    itemSelector: '.article',
                    layoutMode: 'masonry',
                    masonry: {
                        columnWidth: 320
                    },
                    isInitLayout: false
                });

                $containerForIsotope.isotope();

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

})(jQuery, angular.element);
