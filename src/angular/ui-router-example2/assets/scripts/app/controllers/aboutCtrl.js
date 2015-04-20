angular
    .module('app')
    .controller('aboutCtrl', ['$scope','Friends', function($scope, Friends) {
        $scope.title = "About";
        $scope.friends = Friends.get();
        window.aa = Friends.get();
        console.log(Friends);
        console.log(Friends.get());
         console.log($scope.friends);
        $scope.items = ['a', 'b', 'c'];
    }]);
