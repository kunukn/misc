module.exports = function(ngModule) {
    ngModule.directive('bandInfo', function(bandList) {
        return {
            template: require('./band-info.html'),
            restrict: 'E',
            controller: function($scope) {
                $scope.bands = bandList;
            }
        }
    });
};
