;
'use strict';
import styles from '../styles/app.scss'; // Apply styling

console.log('App running');

var log = console.log.bind(console);

$('.js-work-history__toggle').each(function(index, element) {
    var $button = $(element),
        $ships = $button.closest('.js-work-history'),
        $collapsible = $ships.find('.js-work-history__content').first();

    // init
    $collapsible.slideToggle(0);
    $button.toggleClass('sfs-show');

    // event binding
    $button.click(function(event) {
        $collapsible.slideToggle(200);
        $button.toggleClass('show');
    });
});

export class App {

}