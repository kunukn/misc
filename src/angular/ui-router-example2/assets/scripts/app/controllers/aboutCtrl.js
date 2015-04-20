angular
    .module('app')
    .controller('aboutCtrl', ['$scope','Friends', function($scope, Friends) {
        $scope.title = "About";
        $scope.friends = Friends.get();
        $scope.items = ['a', 'b', 'c'];
    }]);
