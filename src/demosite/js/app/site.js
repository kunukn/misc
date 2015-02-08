;
var Site, app;

/* site.js */
(function(d, $) {
    Site = Site || {}; // global var
    app = {};

    Site.Api = {};
    Site.Api.isDesktop = function() {
        return $(document).width() >= 992;
    };

    $(function() {
        Handlebars.registerHelper('urlFormat', function(url) {
            return url ? url : '#';
        });

        Handlebars.registerHelper('iconFormat', function(icon) {
            return icon ? icon : '';
        });

        var
            templateHtmlSpot = Handlebars.compile($('#templateHtmlSpot').html()),
            templateHtmlImageSpot = Handlebars.compile($('#templateHtmlImageSpot').html());

        // Content
        $('#placeholder1').append(templateHtmlSpot(Site.Stub.htmlSpots.htmlSpot1));
        $('#placeholder2').append(templateHtmlSpot(Site.Stub.htmlSpots.htmlSpot2));
        $('#placeholder3').append(templateHtmlSpot(Site.Stub.htmlSpots.htmlSpot3));
        $('#placeholder4').append(templateHtmlSpot(Site.Stub.htmlSpots.htmlSpot4));
        $('#placeholder5').append(templateHtmlSpot(Site.Stub.htmlSpots.htmlSpot5));
        $('#placeholder6').append(templateHtmlImageSpot(Site.Stub.htmlSpots.htmlSpot6));
        $('#placeholder7').append(templateHtmlSpot(Site.Stub.htmlSpots.htmlSpot7));
        $('#placeholder8').append(templateHtmlSpot(Site.Stub.htmlSpots.htmlSpot8));

        leftNavigationIsAvailableForDesktopExceptOnFrontpage();
        enableForMegaMenuMouseOverAndOut();
    });

    function enableForMegaMenuMouseOverAndOut() {
        $('#navigationMegamenu .navigation-item').on('mouseenter', function(e) {
            $(this).addClass('open');
        });

        $('#navigationMegamenu .navigation-item').on('mouseleave', function(e) {
            $(this).removeClass('open');
        });
    }

    function leftNavigationIsAvailableForDesktopExceptOnFrontpage() {
        if (Site.Api.isDesktop() && $('#body').attr('data-pagetype') !== 'frontpage') {
            $('#leftMenu').css('display', 'inline-block');
        }
    }

    // Knockout
    app.languagesSupported = ko.mapping.fromJS(Site.Stub.languagesSupported);
    app.globalLinkItems = ko.mapping.fromJS(Site.Stub.globalLinkItems);
    app.accordianMenuItems = ko.mapping.fromJS(Site.Stub.accordianMenuItems);
    app.megaMenuItems = ko.mapping.fromJS(Site.Stub.megaMenuItems);
    app.leftMenuItems = ko.mapping.fromJS(Site.Stub.leftMenuItems);

    Site.app = app;
    ko.applyBindings(Site.app);
})(document, jQuery);
