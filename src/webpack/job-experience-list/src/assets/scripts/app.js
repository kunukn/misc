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

var app = new Vue({
    el: '#app',
    data: {
        title: 'Positions',
        roles: [{
                role: 'Architect',
                jobs: [
                    { company: 'ABC', duration: { year: 1, month: 2 } },
                    { company: 'BCD', duration: { year: 3, month: 4 } },
                ]
            },
            {
                role: 'Developer',
                jobs: [
                    { company: 'XBC', duration: { year: 1, month: 2 } },
                    { company: 'XCD', duration: { year: 3, month: 4 } },
                ]
            },
        ],
    }
})

log('App running');



export class App {
    constructor() {}
}