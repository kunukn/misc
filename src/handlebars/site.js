var Site;

/* site.js */
(function(d, $) {
	Site = Site || {}; // global var
	$( document ).ready(function() {
		
	    Handlebars.registerHelper('urlFormat', function(url) {
	        return url ? url : '#';
	    });

	    Handlebars.registerHelper('iconFormat', function(icon) {
	        return icon ? icon : '';
	    });

	    var 
	    templateSmallDeviceNavigation = Handlebars.compile($('#templateSmallDeviceNavigation').html()),
	    templateTopPanelGlobalLinks = Handlebars.compile($('#templateTopPanelGlobalLinks').html()),
	    templateHtmlSpot = Handlebars.compile($('#templateHtmlSpot').html()),
	    templateHtmlImageSpot = Handlebars.compile($('#templateHtmlImageSpot').html());;	    
	    
    	$('#renderedSmallDeviceNavigation').append(templateSmallDeviceNavigation(Site.Stub));
    	$('#renderedTopPanelGlobalLinks').append(templateTopPanelGlobalLinks(Site.Stub));
    	
    	$('#placeholder1').append(templateHtmlSpot(Site.Stub.htmlSpots.htmlSpot1));
    	$('#placeholder2').append(templateHtmlSpot(Site.Stub.htmlSpots.htmlSpot2));
    	$('#placeholder3').append(templateHtmlSpot(Site.Stub.htmlSpots.htmlSpot3));
    	$('#placeholder4').append(templateHtmlSpot(Site.Stub.htmlSpots.htmlSpot4));
    	$('#placeholder5').append(templateHtmlSpot(Site.Stub.htmlSpots.htmlSpot5));
    	$('#placeholder6').append(templateHtmlImageSpot(Site.Stub.htmlSpots.htmlSpot6));
    	$('#placeholder7').append(templateHtmlSpot(Site.Stub.htmlSpots.htmlSpot7));
    	$('#placeholder8').append(templateHtmlSpot(Site.Stub.htmlSpots.htmlSpot8));
	});
})(document, jQuery);
