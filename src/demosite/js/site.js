var Site;

/* site.js */
(function(d, $) {
    Site = Site || {}; // global var

    Site.Api = {};
    Site.Api.isDesktop = function() {
        return $(document).width() >= 992;
    };

    $(document).ready(function() {
        Handlebars.registerHelper('urlFormat', function(url) {
            return url ? url : '#';
        });

        Handlebars.registerHelper('iconFormat', function(icon) {
            return icon ? icon : '';
        });

        var templateLanguagesSupported = Handlebars.compile($('#templateLanguagesSupported').html()),
            //templateNavigation = Handlebars.compile($('#templateNavigation').html()),
            templateTopPanelGlobalLinks = Handlebars.compile($('#templateTopPanelGlobalLinks').html()),
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

        // UI
        $('#renderedLanguageSelection').append(templateLanguagesSupported(Site.Stub));
        //$('#renderedNavigation').append(templateNavigation(Site.Stub));
        $('#renderedTopPanelGlobalLinks').append(templateTopPanelGlobalLinks(Site.Stub));

        leftNavigationIsAvailableForDesktopExceptOnFrontpage();
		enableForMegaMenuMouseOverAndOut();      
    });

	function enableForMegaMenuMouseOverAndOut(){
		  $('#navigationMegamenu .flex-item').on('mouseenter', function(e) {
            $(this).addClass('open');
        });

        $('#navigationMegamenu .flex-item').on('mouseleave', function(e) {
            $(this).removeClass('open');
        });
	}
   
    function leftNavigationIsAvailableForDesktopExceptOnFrontpage() {
        if (Site.Api.isDesktop() && $('.body').attr('data-pagetype') !== 'frontpage') {
            $('#leftMenu').css('display', 'inline-block');
        }
    }

})(document, jQuery);
