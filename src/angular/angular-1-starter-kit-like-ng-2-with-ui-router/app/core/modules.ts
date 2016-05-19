import * as angular from 'angular';

//import uiRouter from 'angular-ui-router';

angular.module('app.services', []);

angular.module('app', ['app.services', require('angular-ui-router')]);
