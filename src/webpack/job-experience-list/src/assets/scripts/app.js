;
'use strict';
import styles from '../styles/app.scss'; // Apply styling

const log = console.log.bind(console);


function qs(expr, context) {
    return (context || document).querySelector(expr);
}

function qsa(expr, context) {
    return [].slice.call((context || document).querySelectorAll(expr), 0);
}

function byId(id) {
    return document.getElementById(id);
}

log('App running');

export class App {

}