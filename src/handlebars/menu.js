var WEB = WEB || {};

(function(d, $) {
    // Format url
    Handlebars.registerHelper('urlFormat', function(url) {
        return url ? url : '#';
    });

    var templateSmallDeviceNavigation = Handlebars.compile($('#templateSmallDeviceNavigation').html());
    var templateTopPanelGlobalLinks = Handlebars.compile($('#templateTopPanelGlobalLinks').html());

    $('#renderedSmallDeviceNavigation').append(templateSmallDeviceNavigation(WEB.stub));
    $('#renderedTopPanelGlobalLinks').append(templateTopPanelGlobalLinks(WEB.stub));
})(document, jQuery);
