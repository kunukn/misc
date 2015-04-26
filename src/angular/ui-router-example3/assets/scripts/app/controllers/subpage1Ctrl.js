angular
    .module('app')
    .controller('subpage1Ctrl', ['$scope', function($scope) {
        $scope.title = "About";
        $scope.items = ['a', 'b', 'c'];
    }]);
