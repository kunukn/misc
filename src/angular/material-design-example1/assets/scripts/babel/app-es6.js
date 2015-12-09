let app;

((angular) => {

    app = angular
        .module('app', ['ngMaterial'])
        .controller('mainController', ['$scope', ($scope) => {
            $scope.btnClick = (e) => {
                $scope.message = "clicked: " + new Date().toLocaleString();
            };
        }]);

})(angular, undefined);

