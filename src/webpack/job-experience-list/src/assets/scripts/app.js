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
                title: 'Architect',
                durationFiveYears: { year: 1, month: 2 },
                durationTotal: { year: 1, month: 2 },
                jobs: [
                    { company: 'ABC', durationTotal: { year: 1, month: 2 } },
                    { company: 'BCD', durationTotal: { year: 3, month: 4 } },
                ]
            },
            {
                title: 'Developer',
                durationFiveYears: { year: 1, month: 2 },
                durationTotal: { year: 1, month: 2 },
                jobs: [
                    { company: 'XBC', durationTotal: { year: 5, month: 6 } },
                    { company: 'XCD', durationTotal: { year: 7, month: 8 } },
                ]
            },
        ],
    }
})

log('App running');



export class App {
    constructor() {}
}