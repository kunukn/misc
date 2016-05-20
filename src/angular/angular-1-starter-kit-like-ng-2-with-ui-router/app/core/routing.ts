'use strict';

angular
    .module('app')
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {
		  $urlRouterProvider.otherwise("/state1");
		  
		  $stateProvider
		    .state('state1', {
		      url: "/state1",
			  template: '<div>state 1</div>'
		    })  
		    .state('state2', {
		      url: "/state2",
			  template: '<div>state 2</div>'
		    })
			  .state('state3', {
				  url: "/state3",
				  template: '<div>state 3</div>'
			  })
			  .state('state4', {
				  url: "/state4",
				  template: '<div>state 4</div>'
			  })
			  .state('state5', {
				  url: "/state5",
				  template: '<div>state 5</div>'
			  })
		    ;
		}]);

