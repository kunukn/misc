(function() {

    "use strict";

    var app =
        angular.module('app', [])
        .service('signupService', ['$http', function($http) {
            var urlBase = 'http://example.com/signup';
            this.newSignup = (model) => {
                return $http.post(urlBase, model);
            };
        }])

    .controller(
        'appController', ['$scope', '$timeout', 'signupService', function($scope, $timeout, signupService) {
            $scope.signupModel = {
                name: '',
                email: '',
                time: 0,
                guests: 0
            };

            // start hovering zepperliner after other animation effect
            $timeout( function(){
                $scope.zeppelinerAnimation = {
                    'animation': 'move-up-and-down 2.1s 2s infinite'
                };
            }, 3000);

            $scope.signup = () => {
                console.log('signup clicked');
                console.log($scope.signupModel);
                // signupService.newSignup($scope.signupModel);
                alert(JSON.stringify($scope.signupModel));
                return false;
            };
        }]);

})();
