  angular.module('app', ['ngDragDrop', 'ui.router'])
      .run(
          ['$rootScope', '$state', '$stateParams',
              function($rootScope, $state, $stateParams) {
                  $rootScope.$state = $state;
                  $rootScope.$stateParams = $stateParams;
              }
          ]
      )
      .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$compileProvider', 
      	function($urlRouterProvider, $stateProvider, $locationProvider, $compileProvider) {

          //if (!window.app.isLocalhost ) {
          //    $compileProvider.debugInfoEnabled(false); // better perfomance
          //}

          $urlRouterProvider.otherwise('/');

          // $locationProvider.html5Mode(true);  // mimic postback url even though it is a SPA

          $stateProvider
              .state('default', {
                  url: '/',
                  templateUrl: 'templates/start-page.html',
                  controller: ['$scope', function($scope) {
                      $scope.data = "drag me";
                  }]
              });
      }]);
