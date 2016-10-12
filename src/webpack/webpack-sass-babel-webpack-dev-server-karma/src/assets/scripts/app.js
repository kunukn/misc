;
'use strict';

if (process.env.INCLUDE_STYLING) {
    require('../styles/app.scss');
}

import utils from './util';

console.log('App running');

export default class App {
    constructor() {
        this.name = 'app';
    }
};