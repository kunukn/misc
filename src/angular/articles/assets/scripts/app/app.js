;
'use strict';


(function() {

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
                        width: 'x2',
                        title: 'article 1',
                        description: 'description 1',
                        tags: ['tag-corporate', 'tag-nnit-way'],
                        image: 'content/images/image-2x.png'
                    }, {
                        type: 'popup',
                        width: 'x2',
                        title: 'article 2',
                        description: 'description 2',
                        tags: ['tag-corporate', 'tag-technology'],
                        detail: 'big-image',
                        image: 'content/images/image-2x.png'

                    }, {
                        type: 'video',
                        width: 'x1',
                        title: 'article 3',
                        description: 'description 3',
                        tags: ['tag-technology', 'tag-financials'],
                        image: 'content/images/image-1x.png'

                    }, {
                        type: 'basic',
                        width: 'x1',
                        title: 'article 4',
                        description: 'description 4',
                        tags: ['tag-corporate', 'tag-customers']
                    }, {
                        type: 'popup',
                        width: 'x2',
                        title: 'article 5',
                        description: 'description 5',
                        tags: ['tag-corporate', 'tag-financials'],
                        detail: 'small-image'
                    }, {
                        type: 'popup',
                        width: 'x2',
                        title: 'article 6',
                        description: 'description 6',
                        tags: ['tag-financials'],
                        detail: 'carousel'
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
                        templateUrl: frontpageArticleTemplates.articles,
                        controller: ['$scope', 'storage', function($scope, storage) {
                            $scope.frontpageArticles = storage.frontpageArticles || [];
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

    $(function domReady() {

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
})();
