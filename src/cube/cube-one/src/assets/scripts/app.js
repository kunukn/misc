;
'use strict';

import '../styles/app.scss';

import { CUBE, ACTION, STATES } from './constants';
import { log } from './logger';

import { qs, qsa, byId } from './query';

import { dictColors } from './dictionaries/dictionary';

import { cloneObject, nextState, getLeft, getRight, getDown, getBack, getTop, getFront } from './cube-util';

import { dictCube } from './dictionaries/dict-cube';

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
    touchTopEl = qs('.js-touch-top', cubeComponentEl),
    touchFrontEl = qs('.js-touch-front', cubeComponentEl),
    touchRightEl = qs('.js-touch-right', cubeComponentEl),
    cubeEl = qs('.js-cube', cubeComponentEl),
    frontEl = qs('.front', cubeEl),
    topEl = qs('.top', cubeEl),
    rightEl = qs('.right', cubeEl),
    leftEl = qs('.left', cubeEl),
    backEl = qs('.back', cubeEl),
    downEl = qs('.down', cubeEl),
    debugEl = qs('.debug');

let stateCode = 'tf';

function updateDebug() {
    debugEl.innerHTML = `<span class="state">${stateCode}</span><span class="time">${new Date()}</span>`;
}

const hammerFront = new Hammer(
    touchFrontEl,
    hammerOptions);

hammerFront.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});

hammerFront.on('tap swipeup swipedown swiperight swipeleft', (ev) => {
    const type = ev.type;
    let element = ev.target;

    // Find swipe element if event is invoke on child element
    if (element.dataset.type !== 'swipe-component') {
        element = element.parentElement;
        if (element.dataset.type !== 'swipe-component')
            element = element.parentElement;
    }
    let nextStateCode;
    switch (type) {
        case 'tap':
            tap();
            break;
        case 'swipeup':
            nextStateCode = dictCube[stateCode]['x'];
            stateCode = nextStateCode;
            x();
            break;
        case 'swiperight':
            nextStateCode = dictCube[stateCode]['y'];
            stateCode = nextStateCode;
            y();
            break;
        case 'swipedown':
            nextStateCode = dictCube[stateCode]['-x'];
            stateCode = nextStateCode;
            _x();
            break;
        case 'swipeleft':
            nextStateCode = dictCube[stateCode]['-y'];
            stateCode = nextStateCode;
            _y();
            break;
    }

});

function updateUiFaces() {

    let t, f, r, l, b, d;

    t = getTop(stateCode);
    f = getFront(stateCode);
    r = getRight(stateCode);
    l = getLeft(stateCode);
    b = getBack(stateCode);
    d = getDown(stateCode);

    topEl.style.background = dictColors[t];
    frontEl.style.background = dictColors[f];
    rightEl.style.background = dictColors[r];
    leftEl.style.background = dictColors[l];
    backEl.style.background = dictColors[b];
    downEl.style.background = dictColors[d];
}

function transitionEnd(ev) {
    cubeEl.style.transition = `0s`;
    nextFrame(_ => {
        updateUiFaces();
        cubeEl.style.transform = '';
        next(_ => {
            cubeEl.style.transition = '';
        });
    });
}

function tap() {
    log(`tap`);
    updateDebug();
}

function x() {
    cubeEl.style.transform = `rotateX(90deg)`;
    updateDebug();
}

function y() {
    cubeEl.style.transform = `rotateY(90deg)`;
    updateDebug();
}

function _x() {
    cubeEl.style.transform = `rotateX(-90deg)`;
    updateDebug();
}

function _y() {
    cubeEl.style.transform = `rotateY(-90deg)`;
    updateDebug();
}

function z() {
    cubeEl.style.transform = `rotateZ(90deg)`;
    updateDebug();
}

function _z() {
    cubeEl.style.transform = `rotateZ(-90deg)`;
    updateDebug();
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

updateUiFaces();

export class App {
    constructor() {}
}