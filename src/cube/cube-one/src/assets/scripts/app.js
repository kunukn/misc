;
'use strict';

import '../styles/app.scss';

import { log } from './logger';

import { qs, qsa, byId } from './query';

import dictColors from './dictionaries/dict-colors';


import {
    cloneObject,
    nextState,
    getLeft,
    getRight,
    getDown,
    getBack,
    getUp,
    getFront
} from './cube-util';

import dictCube from './dictionaries/dict-cube';
import dictCubeTransform from './dictionaries/dict-cube-transform';

import { STATES } from './constants';

log('App running');

function rAF(callback) {
    window.requestAnimationFrame(callback);
}

function nextFrame(callback) {
    rAF(() => {
        rAF(callback);
    });
}


const KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    a: 65,
    d: 68,
    e: 69,
    q: 81,
    s: 83,
    w: 87,
};


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
    frontEl = qs('.front > div', cubeEl),
    upEl = qs('.up > div', cubeEl),
    rightEl = qs('.right > div', cubeEl),
    leftEl = qs('.left > div', cubeEl),
    backEl = qs('.back > div', cubeEl),
    downEl = qs('.down > div', cubeEl),
    stateInfoEl = qs('.js-state-info');

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
    stateInfoEl.innerHTML = `<label>State: </label><span class="state"> ${getState().code}</span>`;
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
const hammerLeft = new Hammer(
    touchLeftEl,
    hammerOptions);
const hammerDown = new Hammer(
    touchDownEl,
    hammerOptions);

hammerFront.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
hammerUp.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
hammerRight.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
hammerLeft.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
hammerDown.get('swipe').set({ direction: Hammer.DIRECTION_ALL });


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
            tap(element, ev.target.dataset.type);
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
            tap(element, ev.target.dataset.type);
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
            tap(element, ev.target.dataset.type);
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


hammerLeft.on('tap swipeup swipedown swiperight swipeleft', (ev) => {
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
            tap(element, ev.target.dataset.type);
            break;

        case 'swipeup':
            z();
            break;
        case 'swiperight':
            y();
            break;
        case 'swipedown':
            _z();
            break;
        case 'swipeleft':
            _y();
            break;
    }
});

hammerDown.on('tap swipeup swipedown swiperight swipeleft', (ev) => {
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
            tap(element, ev.target.dataset.type);
            break;
        case 'swipeup':
            x();
            break;
        case 'swiperight':
            _z();
            break;
        case 'swipedown':
            _x();
            break;
        case 'swipeleft':
            z();
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

    let t = dictCubeTransform[state.code]['u'];
    upEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

    t = dictCubeTransform[state.code]['f'];
    frontEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

    t = dictCubeTransform[state.code]['r'];
    rightEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

    t = dictCubeTransform[state.code]['l'];
    leftEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

    t = dictCubeTransform[state.code]['b'];
    backEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';

    t = dictCubeTransform[state.code]['d'];
    downEl.style.transform = t ? `rotate${t.dir}(${t.angle}deg)` : '';
}

function transitionEnd(ev) {
    cubeEl.style.transition = `0s`;
    nextFrame(_ => {
        //setTimeout(updateUiFaces, 700);
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

function tap(element, target) {
    qs(`.${target}.face`, element).classList.toggle('tapped');
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

function gotoState(stateCode) {

    if (!STATES[stateCode])
        return;

    let state = getState();
    state.code = stateCode;
    setState(state);
    updateUiFaces();
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

function reset() {
    gotoState('uf');
    return 'reset';
}

cubeEl.addEventListener('transitionend', transitionEnd);

function handleFrontKeyEvent(event) {
    event.stopPropagation();

    switch (event.keyCode) {
        case KEY.LEFT:
            _y();
            break;
        case KEY.UP:
            x();
            break;
        case KEY.RIGHT:
            y();
            break;
        case KEY.DOWN:
            event.preventDefault();
            _x();
            break;
    }
}


function handleRightKeyEvent(event) {
    event.stopPropagation();

    switch (event.keyCode) {
        case KEY.LEFT:
            _y();
            break;
        case KEY.UP:
            _z();
            break;
        case KEY.RIGHT:
            y();
            break;
        case KEY.DOWN:
            event.preventDefault();
            z();
            break;
    }
}


function handleUpKeyEvent(event) {
    event.stopPropagation();

    switch (event.keyCode) {
        case KEY.LEFT:
            _z();
            break;
        case KEY.UP:
            x();
            break;
        case KEY.RIGHT:
            z();
            break;
        case KEY.DOWN:
            _x();
            break;
    }
}


function handleKeyEvent(event) {
    switch (event.keyCode) {
        case KEY.LEFT:
        case KEY.a:
            _y();
            break;
        case KEY.UP:
        case KEY.w:
            x();
            break;
        case KEY.RIGHT:
        case KEY.d:
            y();
            break;
        case KEY.DOWN:
        case KEY.s:
            _x();
            break;
        case KEY.q:
            _z();
            break;
        case KEY.e:
            z();
            break;
    }
}

window.cube = {
    x,
    _x,
    y,
    _y,
    z,
    _z,
    gotoState,
    reset
};


((initApplication) => {
    window.addEventListener('keydown', handleKeyEvent, false);    
    updateUiFaces();
    updateAppInfo();
})();

export class App {
    constructor() {}
}