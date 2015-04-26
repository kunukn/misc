angular
    .module('app')
    .controller('loginCtrl', ['$scope', function($scope) {
        $scope.title = "Login";
        $scope.items = ['a', 'b', 'c'];
    }]);
