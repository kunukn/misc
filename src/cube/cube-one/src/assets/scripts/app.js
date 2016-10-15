;
'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import dictColors from './dictionaries/dict-colors';

import { cloneObject, nextState, getLeft, getRight, getDown, getBack, getUp, getFront } from './cube-util';

import dictCube from './dictionaries/dict-cube';

log('App running');

function rAF(callback) {
    window.requestAnimationFrame(callback);
}

function nextFrame(callback) {
    rAF(() => {
        rAF(callback);
    });
}

const hammerOptions = {
    preventDefault: true
};

const
    cubeComponentEl = byId('cube-component'),
    touchUpEl = qs('.js-touch-up', cubeComponentEl),
    touchFrontEl = qs('.js-touch-front', cubeComponentEl),
    touchRightEl = qs('.js-touch-right', cubeComponentEl),
    touchLeftEl = qs('.js-touch-left', cubeComponentEl),
    touchBackEl = qs('.js-touch-back', cubeComponentEl),
    touchDownEl = qs('.js-touch-down', cubeComponentEl),
    cubeEl = qs('.js-cube', cubeComponentEl),
    frontEl = qs('.front', cubeEl),
    upEl = qs('.up', cubeEl),
    rightEl = qs('.right', cubeEl),
    leftEl = qs('.left', cubeEl),
    backEl = qs('.back', cubeEl),
    downEl = qs('.down', cubeEl),
    debugEl = qs('.debug');

let _appState = {
    code: nextState.first,
    swipeEnabled: true,
};

function getState() {
    return cloneObject(_appState);
}

function setState(state) {
    _appState = state;
    updateDebug();
}

function updateDebug() {
    debugEl.innerHTML = `<label>State: </label><span class="state"> ${getState().code}</span>`;
}

const hammerFront = new Hammer(
    touchFrontEl,
    hammerOptions);

const hammerUp = new Hammer(
    touchUpEl,
    hammerOptions);

const hammerRight = new Hammer(
    touchRightEl,
    hammerOptions);

hammerFront.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
hammerUp.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
hammerRight.get('swipe').set({ direction: Hammer.DIRECTION_ALL });

hammerFront.on('tap swipeup swipedown swiperight swipeleft', (ev) => {
    const type = ev.type;
    let element = ev.target;

    // Find swipe element if event is invoke on child element
    if (element.dataset.type !== 'swipe-component') {
        element = element.parentElement;
        if (element.dataset.type !== 'swipe-component')
            element = element.parentElement;
    }
    let state = getState(),
        stateCode = state.code;

    switch (type) {
        case 'tap':
            tap();
            break;

        case 'swipeup':
            if (!state.swipeEnabled)
                return;

            state.code = dictCube[stateCode]['x']; // reducer
            state.swipeEnabled = false;
            setState(state);
            x(); // ui
            break;
        case 'swiperight':
            if (!state.swipeEnabled)
                return;

            state.code = dictCube[stateCode]['y']; // reducer
            state.swipeEnabled = false;
            setState(state);
            y(); // ui
            break;
        case 'swipedown':
            if (!state.swipeEnabled)
                return;

            state.code = dictCube[stateCode]['-x']; // reducer
            state.swipeEnabled = false;
            setState(state);
            _x(); // ui
            break;
        case 'swipeleft':
            if (!state.swipeEnabled)
                return;

            state.code = dictCube[stateCode]['-y']; // reducer
            state.swipeEnabled = false;
            setState(state);
            _y(); // ui
            break;
    }
});


hammerUp.on('tap swipeup swipedown swiperight swipeleft', (ev) => {
    const type = ev.type;
    let element = ev.target;

    // Find swipe element if event is invoke on child element
    if (element.dataset.type !== 'swipe-component') {
        element = element.parentElement;
        if (element.dataset.type !== 'swipe-component')
            element = element.parentElement;
    }
    let state = getState(),
        stateCode = state.code;

    switch (type) {
        case 'tap':
            tap();
            break;

        case 'swipeup':
            if (!state.swipeEnabled)
                return;

            state.code = dictCube[stateCode]['x']; // reducer
            state.swipeEnabled = false;
            setState(state);
            x(); // ui
            break;
        case 'swiperight':
            if (!state.swipeEnabled)
                return;

            state.code = dictCube[stateCode]['z']; // reducer
            state.swipeEnabled = false;
            setState(state);
            z(); // ui
            break;
        case 'swipedown':
            if (!state.swipeEnabled)
                return;

            state.code = dictCube[stateCode]['-x']; // reducer
            state.swipeEnabled = false;
            setState(state);
            _x(); // ui
            break;
        case 'swipeleft':
            if (!state.swipeEnabled)
                return;

            state.code = dictCube[stateCode]['-z']; // reducer
            state.swipeEnabled = false;
            setState(state);
            _z(); // ui
            break;
    }
});


hammerRight.on('tap swipeup swipedown swiperight swipeleft', (ev) => {
    const type = ev.type;
    let element = ev.target;

    // Find swipe element if event is invoke on child element
    if (element.dataset.type !== 'swipe-component') {
        element = element.parentElement;
        if (element.dataset.type !== 'swipe-component')
            element = element.parentElement;
    }
    let state = getState(),
        stateCode = state.code;

    switch (type) {
        case 'tap':
            tap();
            break;

        case 'swipeup':
            if (!state.swipeEnabled)
                return;

            state.code = dictCube[stateCode]['-z']; // reducer
            state.swipeEnabled = false;
            setState(state);
            _z(); // ui
            break;
        case 'swiperight':
            if (!state.swipeEnabled)
                return;

            state.code = dictCube[stateCode]['y']; // reducer
            state.swipeEnabled = false;
            setState(state);
            y(); // ui
            break;
        case 'swipedown':
            if (!state.swipeEnabled)
                return;

            state.code = dictCube[stateCode]['z']; // reducer
            state.swipeEnabled = false;
            setState(state);
            z(); // ui
            break;
        case 'swipeleft':
            if (!state.swipeEnabled)
                return;

            state.code = dictCube[stateCode]['-y']; // reducer
            state.swipeEnabled = false;
            setState(state);
            _y(); // ui
            break;
    }
});


function updateUiFaces() {

    let u, f, r, l, b, d;
    const state = getState();

    u = getUp(state.code);
    f = getFront(state.code);
    r = getRight(state.code);
    l = getLeft(state.code);
    b = getBack(state.code);
    d = getDown(state.code);

    upEl.style.background = dictColors[u];
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
        rAF(_ => {
            cubeEl.style.transition = '';

            const state = getState();
            state.swipeEnabled = true;
            setState(state);
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

updateUiFaces();
updateDebug();

export class App {
    constructor() {}
}