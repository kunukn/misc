angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider) {  
		  $urlRouterProvider.otherwise("/state1");
		  
		  $stateProvider
		    .state('state1', {
		      url: "/state1",
		      template: '<h1>state 1</h1>'
		    })  
		    .state('state2', {
		      url: "/state2",
		      template: '<h1>state 2</h1>'
		    })
		    ;
		});

