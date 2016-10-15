;
'use strict';

import '../styles/app.scss';

import frontReducer from './reducers/front-reducer';
import rightReducer from './reducers/right-reducer';
import topReducer from './reducers/top-reducer';
import leftReducer from './reducers/left-reducer';
import backReducer from './reducers/back-reducer';
import downReducer from './reducers/down-reducer';


import { CUBE, ACTION, STATES } from './constants';
import { log } from './logger';

import { qs, qsa, byId } from './query';

import { dictStateRotate, dictTransform } from './dictionaries/dictionary';

import { cloneObject, transformsApply } from './cube-util';

log('App running');

function rAF(callback) {
    window.requestAnimationFrame(callback);
}
const next = rAF;

function nextFrame(callback) {
    rAF(() => {
        rAF(callback);
        return next;
    });
}

const hammerOptions = {
    preventDefault: true
};

const
    cubeComponentEl = byId('cube-component'),
    touchEl = qs('.js-touch', cubeComponentEl),
    cubeEl = qs('.js-cube', cubeComponentEl),
    frontEl = qs('.front', cubeEl),
    topEl = qs('.top', cubeEl),
    rightEl = qs('.right', cubeEl),
    leftEl = qs('.left', cubeEl),
    backEl = qs('.back', cubeEl),
    downEl = qs('.down', cubeEl);

const colors = [];
colors['t'] = 'red';
colors['f'] = 'lightgreen';
colors['r'] = 'beige';
colors['l'] = 'teal';
colors['b'] = 'orange';
colors['d'] = 'dodgerblue';

const dictState = [];
dictState['tf'] = [];
dictState['tf']['x'] = 'fd';
dictState['tf']['-x'] = 'bt';
dictState['tf']['y'] = 'tl';
dictState['tf']['-y'] = 'tr';
dictState['tf']['z'] = 'rf';
dictState['tf']['-z'] = 'lf';

topEl.style.background = colors['t'];
frontEl.style.background = colors['f'];
rightEl.style.background = colors['r'];
leftEl.style.background = colors['l'];
backEl.style.background = colors['b'];
downEl.style.background = colors['d'];

let state = 'tf';

const hammer = new Hammer(
    touchEl,
    hammerOptions);

hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});

hammer.on('tap swipeup swipedown swiperight swipeleft', (ev) => {
    const type = ev.type;
    let element = ev.target;

    // Find swipe element if event is invoke on child element
    if (element.dataset.type !== 'swipe-component') {
        element = element.parentElement;
        if (element.dataset.type !== 'swipe-component')
            element = element.parentElement;
    }

    switch (type) {
        case 'tap':
            tap();
            break;
        case 'swipeup':
            x();
            break;
        case 'swiperight':
            y();
            break;
        case 'swipedown':
            _x();
            break;
        case 'swipeleft':
            _y();
            break;
    }

});

function transitionEnd(ev) {
    cubeEl.style.transition = `0s`;
    nextFrame(_ => {

        rightEl.style.background = colors['f'];
        frontEl.style.background = colors['l'];
        cubeEl.style.transform = '';

        next(_ => {

            cubeEl.style.transition = '';

        });
    });
}

function tap() {
    log(`tap`);
}

function x() {
    cubeEl.style.transform = `rotateX(90deg)`;
}

function y() {
    cubeEl.style.transform = `rotateY(90deg)`;
}

function _x() {
    cubeEl.style.transform = `rotateX(-90deg)`;
}

function _y() {
    cubeEl.style.transform = `rotateY(-90deg)`;
}

function z() {
    cubeEl.style.transform = `rotateZ(90deg)`;
}

function _z() {
    cubeEl.style.transform = `rotateZ(-90deg)`;
}

cubeEl.addEventListener('transitionend', transitionEnd);

window.app = window.cube = {
    x,
    _x,
    y,
    _y,
    z,
    _z,
    debug: {}
};

export class App {
    constructor() {}
}