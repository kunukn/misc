var app;

(function () {

    /*** Data structures ***/

    /* Container app */
    function AppViewModel(model) {
        // Data
        var self = this;
        self.demoViewModel = model.demoViewModel;
    };

    /* View Model */
	function DemoViewModel(model) {
        // Data
        var self = this;
        self.title = model.title;
        self.body = model.body;
    };

    /*** Populate data ***/

    var stub = {
        demoViewModel: {
            title: 'hello',
            body: 'world'
        }
    };

    var appViewModel = new AppViewModel(stub);

    /*** Render app ***/
    var appViewModelObservables = ko.mapping.fromJS(appViewModel);
    ko.applyBindings(appViewModelObservables);
    app = appViewModelObservables;

})();
