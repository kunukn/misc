var Site;

(function(d, $) {
	Site = Site || {};
	$( document ).ready(function() {
		// Format url
	    Handlebars.registerHelper('urlFormat', function(url) {
	        return url ? url : '#';
	    });

	    var templateSmallDeviceNavigation = Handlebars.compile($('#templateSmallDeviceNavigation').html());
	    var templateTopPanelGlobalLinks = Handlebars.compile($('#templateTopPanelGlobalLinks').html());

    	$('#renderedSmallDeviceNavigation').append(templateSmallDeviceNavigation(Site.stub));
    	$('#renderedTopPanelGlobalLinks').append(templateTopPanelGlobalLinks(Site.stub));
	});
})(document, jQuery);
