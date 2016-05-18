import * as angular from 'angular';

//import uiRouter from 'angular-ui-router';

const uiRouter = require('angular-ui-router');

angular.module('app.services', []);

// let app = 

angular.module('app', ['app.services', uiRouter]);

// app.config(function($stateProvider, $urlRouterProvider) {
  
//   $urlRouterProvider.otherwise("/state1");
  
//   $stateProvider
//     .state('state1', {
//       url: "/state1",
//       template: '<h1>state 1</h1>'
//     })  
//     .state('state2', {
//       url: "/state2",
//       template: '<h1>state 2</h1>'
//     })
//     ;
// });
