;

(function setupPrototypes() {
    Date.prototype.addDays = function(days) {
        this.setDate(this.getDate() + parseInt(days));
        return this;
    };

    Date.prototype.getFormattedDate = function() {
        var date = this;
        var year = date.getFullYear();
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        return day + '.' + month + '.' + year;
    }
})();

(function setupNamespaces() {
    window.app = {
        isLocalhost: (function() {
            return !!location.host.match(/localhost/);
        })(),

        database: {}
    };
})();

(function setupAngular() {

    if (window.angular) {
        // Import    
        var database = window.app.database;

        var angularApp = angular
            .module('app', ['ui.router'])

        .run(
                ['$rootScope', '$state', '$stateParams',
                    function($rootScope, $state, $stateParams) {
                        $rootScope.$state = $state;
                        $rootScope.$stateParams = $stateParams;
                    }
                ]
            )
            // Shared across controllers
            .factory("user", function() {

                var today = new Date().getFormattedDate();

                return {
                    // page 1
                    name: 'Jane',
                    dueDate: today,
                    parent: 'parent1',
                    workStatus: 'employed',
                    weekSalary: 'nothing',
                    weeks: '',
                    firstMaternityDate: today,

                    isFirstParent: function() {
                        return this.parent === 'parent1';
                    }
                };
            })

        .directive('jqdatepicker', function() {
            // jQuery UI Calendar Danish theme with Angular
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function(scope, element, attrs, ctrl) {
                    $(element).datepicker({
                        showWeek: true,
                        dateFormat: 'dd.mm.yy',
                        firstDay: 1,
                        isRTL: false,
                        showMonthAfterYear: false,
                        yearSuffix: '',
                        onSelect: function(date) {
                            ctrl.$setViewValue(date);
                            ctrl.$render();
                            scope.$apply();
                        }
                    });
                }
            };
        })

        .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$compileProvider', function($urlRouterProvider, $stateProvider, $locationProvider, $compileProvider) {

            //if (!window.app.isLocalhost ) {
            //    $compileProvider.debugInfoEnabled(false); // better perfomance
            //}

            $urlRouterProvider.otherwise('/');

            // $locationProvider.html5Mode(true);  // mimic postback url even though it is a SPA

            var reset = function(user) {
                user.timelineRemainingWeeksAndDays = '';
            }

            $stateProvider
                .state('wizard1', {
                    url: '/',
                    templateUrl: 'templates/wizard/wizard-layout.html',
                    controller: function($scope, user) {

                        reset(user);

                        $scope.isLocalhost = window.app.isLocalhost;
                        $scope.page = 'templates/wizard/wizard1-page.html';

                        $scope.model = {
                            user: user
                        };

                        $scope.parentChange = function(value) {
                            if (value === 'parent1') {
                                user.name = "Jane";
                            }
                            if (value === 'parent2') {
                                user.name = "Jim";
                            }
                        };

                        $scope.nextPage = function() {
                            if (user.dueDate) {
                                var parts = user.dueDate.split('.');
                                var date = new Date(parts[2], parts[0] - 1, parts[1]);

                                date.addDays(1);
                                user.firstMaternityDate = date.getFormattedDate();
                            }
                        };
                    }
                })
                .state('wizard2', {
                    url: '/wizard2',
                    templateUrl: 'templates/wizard/wizard-layout.html',
                    controller: function($scope, user) {
                        $scope.isLocalhost = window.app.isLocalhost;
                        $scope.page = 'templates/wizard/wizard2-page.html';

                        $scope.model = {
                            user: user
                        };

                        $scope.prevPage = function() {};

                        $scope.nextPage = function() {};
                    }
                });
        }]);
    }
})();
