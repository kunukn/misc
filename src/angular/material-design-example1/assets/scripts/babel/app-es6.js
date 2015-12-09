window.app = ((angular) => {

    let appVersion = 1;
    let app = angular.module('app', ['ngMaterial']);
  
    app.controller('mainController', ['$scope', ($scope) => {
        $scope.btnClick = (e) => {
            $scope.message = "clicked: " + new Date().toLocaleString();
        };
    }]);

    return app;
})(angular, undefined);

