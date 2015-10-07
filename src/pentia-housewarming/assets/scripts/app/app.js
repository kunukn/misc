(function() {

    "use strict";

    var app =
        angular.module('app', [])
        .service('signupService', ['$http', function($http) {
            var url = 'http://example.com/signup';
            this.newSignup = function(model) {
                return $http.post(url, model);
            };
        }])

    .controller(
        'appController', ['$scope', '$timeout', 'signupService', function($scope, $timeout, signupService) {
            $scope.signupModel = {
                name: '',
                email: '',
                time: '',
                guests: 0
            };

            $scope.signup = function() {
                console.log('signup clicked');
                console.log($scope.signupModel);
                // signupService.newSignup($scope.signupModel);
                alert(JSON.stringify($scope.signupModel));
                return false;
            };

            $scope.emailValidate = function(email) {
                var emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                return emailRegex.test(email);
            }
        }]);

})();
