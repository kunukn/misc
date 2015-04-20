angular
    .module('app')
    .controller('homeCtrl', ['$scope', 'friends', function($scope, friends) {
        $scope.title = "Home";
        $scope.friends = friends;
        $scope.items = ['home', 'about', 'contact'];
        $scope.selectedValue = 'contact';

        $scope.save = function(){
            appData.friends = $scope.friends;

        	alert(JSON.stringify($scope.friends));
        }
    }]);
