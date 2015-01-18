var WEB = WEB || {};

! function(d, $) {    
    var templateSmallDeviceNavigation = Handlebars.compile($('#templateSmallDeviceNavigation').html());
    var templateTopPanelGlobalLinks = Handlebars.compile($('#templateTopPanelGlobalLinks').html());
    
    $('#renderedSmallDeviceNavigation').append(templateSmallDeviceNavigation(WEB.stub));
    $('#renderedTopPanelGlobalLinks').append(templateTopPanelGlobalLinks(WEB.stub));
}(document, jQuery);
