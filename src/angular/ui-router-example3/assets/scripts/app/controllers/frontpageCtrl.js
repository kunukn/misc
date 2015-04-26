angular
    .module('app')
    .controller('frontpageCtrl', ['$scope', function($scope) {
        $scope.title = "frontpage";
        $scope.save = function(){
        	alert('save');
        }
    }]);
