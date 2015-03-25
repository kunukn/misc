;

require(['jquery', 'knockout', 'knockoutMapping', 'atpBarsel'], function($, ko, koMapping, AtpBarsel) {
    // Debug mode, able to use in browser
    window.ko = ko;
    window.koMapping = koMapping;
    window.$ = $;
    window.jQuery = $;
    window.AtpBarsel = AtpBarsel;

    $(document).ready(function() {

        //console.log('dom is ready');

        window.app = AtpBarsel.Stub;
        window.app = koMapping.fromJS(window.app);
        ko.applyBindings(window.app);

    });
});
