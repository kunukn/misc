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
    appInfoEl = qs('.js-app-info');

let _appState = {
    code: nextState.first,
    swipeEnabled: true,
};

function getState() {
    return cloneObject(_appState);
}

function setState(state) {
    _appState = state;
    updateAppInfo();
}

function updateAppInfo() {
    appInfoEl.innerHTML = `<label>State: </label><span class="state"> ${getState().code}</span>`;
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


hammerUp.on('tap swipeup swipedown swiperight swipeleft', (ev) => {
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
            z();
            break;
        case 'swipedown':
            _x();
            break;
        case 'swipeleft':
            _z();
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
    switch (type) {
        case 'tap':
            tap();
            break;

        case 'swipeup':
            _z();
            break;
        case 'swiperight':
            y();
            break;
        case 'swipedown':
            z();
            break;
        case 'swipeleft':
            _y();
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

function actionInvoke(action, ui) {
    let state = getState(),
        stateCode = state.code;

    if (!state.swipeEnabled)
        return;

    state.code = dictCube[stateCode][action]; // reducer
    state.swipeEnabled = false;
    setState(state);
    ui();
}


function x() {
    actionInvoke('x', uix);
}

function _x() {
    actionInvoke('-x', ui_x);
}

function y() {
    actionInvoke('y', uiy);
}

function _y() {
    actionInvoke('-y', ui_y);
}


function z() {
    actionInvoke('z', uiz);
}

function _z() {
    actionInvoke('-z', ui_z);
}



function uix() {
    cubeEl.style.transform = `rotateX(90deg)`;
}

function uiy() {
    cubeEl.style.transform = `rotateY(90deg)`;
}

function ui_x() {
    cubeEl.style.transform = `rotateX(-90deg)`;
}

function ui_y() {
    cubeEl.style.transform = `rotateY(-90deg)`;
}

function uiz() {
    cubeEl.style.transform = `rotateZ(90deg)`;
}

function ui_z() {
    cubeEl.style.transform = `rotateZ(-90deg)`;
}

cubeEl.addEventListener('transitionend', transitionEnd);

window.app = window.cube = {
    x,
    // _x,
    // y,
    // _y,
    // z,
    // _z
};

updateUiFaces();
updateAppInfo();

export class App {
    constructor() {}
}