var app;

(function($) {

    $(function() {
        // init Isotope
        var $container = $('#isotope-demo').isotope({
            itemSelector: '.element-item',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: 320
            }
        });

        // bind filter button click
        $('#filters').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $container.isotope({
                filter: filterValue
            });
        });
        // change is-checked class on buttons
        $('.button-group').each(function(i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on('click', 'button', function() {
                $buttonGroup.find('.is-checked').removeClass('is-checked');
                $(this).addClass('is-checked');
            });
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
