 var app = angular.module('app', []);

 app.controller('ItemCtrl', ['$scope', function($scope) {
     $scope.items = [{date: new Date()}];

     $scope.addItem = function() {
         $scope.items.push({date: new Date()});
     };

     $scope.removeItem = function(index) {
         $scope.items.splice(index, 1);
     };
 }]);
