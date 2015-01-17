var WEB = WEB || {};

! function(d, $) {    
    var template = Handlebars.compile($('#templateSmallDeviceNavigation').html());
    var html = template(WEB.stub);
   $('#renderedSmallDeviceNavigation').append(html);

}(document, jQuery);
