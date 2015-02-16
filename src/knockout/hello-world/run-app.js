var app;

(function () {

    function AppViewModel(model) {
        this.demoViewModel = model.demoViewModel;
    };

	function DemoViewModel(model) {
        this.title = model.title;
        this.body = model.body;
    };

    var stub = {
        demoViewModel: {
            title: 'hello',
            body: 'world'
        }
    };

    var appViewModel = new AppViewModel(stub);

    var appViewModelObservables = ko.mapping.fromJS(appViewModel);
    ko.applyBindings(appViewModelObservables);
    app = appViewModelObservables;

})();
