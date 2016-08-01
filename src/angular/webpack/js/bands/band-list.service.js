module.exports = function(ngModule) {
    ngModule.factory('bandList', function() {
        return [{
            name: 'Joe',
            formed: '2000'
        }, {
            name: 'Jill',
            formed: '2001'
        }];
    });
};
