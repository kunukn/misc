;
'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import CubeOne from './cube-one';

log('App running');

let cube = new CubeOne(byId('cube-component-1'), qs('.js-state-info'));
cube.init();

window.cube = window.cube || [];
window.cube.push(cube);


export class App {
    constructor() {}
}