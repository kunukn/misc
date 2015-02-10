var app = {};

(function() {

    var stub = {
        spots: [{
            title: 'spo1',
            width: 'w1'
        }, {
            title: 'spo2',
            width: 'w2'
        }]
    };

    app = ko.mapping.fromJS(stub);
    ko.applyBindings(app);

})();
