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
                time: '14',
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
                // Naive custom email checker
                return email && email.indexOf('@') > -1 && email.indexOf('.') > -1;
            }
        }]);

})();
