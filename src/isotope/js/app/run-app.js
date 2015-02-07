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

})(jQuery);
