var app;

(function($) {

    function Item(data) {
        this.title = ko.observable(data.title);
    }

    function AppViewModel() {

        var self = this;
        self.list = ko.observableArray([]);

        self.load = function() {
            for (var i = 0; i < 20; i++) {
                self.list.push(new Item({
                    title: new Date().toString()
                }));
            };
        }

        self.load();
    }

    app = new AppViewModel();
    ko.applyBindings(app);

    var scrollLoad = true;
    $(window).scroll(function() {
        if (scrollLoad && $(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
            scrollLoad = false;
            // ajax load data..
            app.load();

            scrollLoad = true;
        }
    });

})(jQuery);
