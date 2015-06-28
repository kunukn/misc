  angular.module('app', ['ngDragDrop'])
      .controller('appCtrl', ['$scope', function($scope) {
          $scope.data = "drag me";
      }]);
