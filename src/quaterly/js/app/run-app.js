var app;

(function($) {

    $(function() {

        var $buttons = $('.filter-buttons-section .filter-button');
        $buttons.each(function(i) {
            var $this = $(this);
            var filter = $this.attr('data-filter');
            var text = this.innerHTML;
            console.log(filter+' '+text);
        });

    });

    /*** Data structures ***/

    /* Container app */
    function AppViewModel(model) {
        // Data
        var self = this;
        self.viewModel = model.viewModel;
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
        viewModel: {
            title: 'hello',
            body: 'world'
        }
    };

    var appViewModel = new AppViewModel(stub);

    /*** Render app ***/
    var appViewModelObservables = ko.mapping.fromJS(appViewModel);
    ko.applyBindings(appViewModelObservables);
    app = appViewModelObservables;

})(jQuery);
