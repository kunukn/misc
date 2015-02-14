var app =
    (function() {

        var spots = [];

        for (var i = 1; i <= 100; i++) {
            spots.push({
                title: ko.observable('spot ' + i),
                size: Math.random() > 0.5 ? 'size1' : 'size2',
                update: function() {
                    this.title(this.title()+'+');
                }
            });
        };

        var data = {
            spots: spots
        };
        ko.applyBindings(data);
        return data;
    })();
