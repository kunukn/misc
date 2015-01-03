(function($){

var $leftNav = $('.leftnav').first();
var $navbarCollapseGrid = $('#navbar-collapse-grid');
var $leftnavCollapseGrid = $('#leftnav-collapse-grid');

$('button[data-target="#leftnav-collapse-grid"]').css('display', 'none');

$navbarCollapseGrid.append($leftNav);

$leftnavCollapseGrid.addClass('in');

$('.leftnav .navbar-header').remove();

})(jQuery)