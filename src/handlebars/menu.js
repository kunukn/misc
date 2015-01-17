var WEB = WEB || {};

! function(d, $) {    
    var template = Handlebars.compile($('#templateAllMenus').html());
    var html = template(WEB.stub);
   $('#renderedAllMenus').append(html);

}(document, jQuery);
