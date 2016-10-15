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

const Hammer = window.Hammer;

let _state = {};

function getState() {
    return _state;
}

function initState() {
    _state = {
        value: 'tf', // top front
        stateHistory: ['tf'],
        actionHistory: [],
        transforms: [],
    };
}

function formatDate(date) {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function setState(newState) {
    _state = newState;
    return this;
}

function updateUiByState(state) {
    if (state.transforms && state.transforms.length) {
        const transforms = state.transforms.map(t => `rotate${t.key}(${t.val}deg)`);
        cubeElement.style.transform = transforms.join(' ');
    }
    return this;
}

function truncateTransforms(state) {
    if (state.transforms.length >= 4) {
        // todo
    }
    return this;
}

function getDebugData(face, eventtype) {
    return `
    <div class='event'>${face} ${eventtype}</div>
    <div class='state'> ${JSON.stringify(getState())}</div>
    <div class='transform'> ${cubeElement.style.transform}</div>
    <div class='time'> ${(formatDate(new Date()))}</div>
    `;
}

const debug = qs('.debug'),
    cubeElement = byId('cube-1x1'),
    frontElement = byId('front'),
    topElement = byId('top'),
    rightElement = byId('right'),
    leftElement = byId('left'),
    backElement = byId('back'),
    downElement = byId('down');


cubeElement.addEventListener('transitionend', (ev) => {
    let state = getState();

    if (state.transforms && state.transforms.length >= 4) {
        //    cubeElement.classList.add('u-no-transition-important');
        //   cubeElement.offsetHeight;
        //cubeElement.classList.remove('u-no-transition-important');
    }

});



/* Init */
const hammerOptions = {
    preventDefault: true
};
const hammerFront = new Hammer(frontElement, hammerOptions);
hammerFront.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});
const hammerTop = new Hammer(topElement, hammerOptions);
hammerTop.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});
const hammerRight = new Hammer(rightElement, hammerOptions);
hammerRight.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});
const hammerBack = new Hammer(backElement, hammerOptions);
hammerBack.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});
const hammerDown = new Hammer(downElement, hammerOptions);
hammerDown.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});
const hammerLeft = new Hammer(leftElement, hammerOptions);
hammerLeft.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});
//-----------




/* Setup */
const hammerEvents = 'swipeleft swiperight swipeup swipedown';

hammerFront.on(hammerEvents, (ev) => {
    const action = { type: ev.type },
        newState = frontReducer(getState(), action);
    truncateTransforms(newState);
    setState(newState);
    updateUiByState(newState);
    debug.innerHTML = getDebugData('front', ev.type);
    log(ev.type);
});

hammerRight.on(hammerEvents, (ev) => {
    const action = { type: ev.type };
    const newState = rightReducer(getState(), action);
    truncateTransforms(newState);
    setState(newState);
    updateUiByState(newState);
    debug.innerHTML = getDebugData('right', ev.type);
    log(ev.type);

});
hammerLeft.on(hammerEvents, (ev) => {
    const action = { type: ev.type };
    const newState = leftReducer(getState(), action);
    truncateTransforms(newState);
    setState(newState);
    updateUiByState(newState);
    debug.innerHTML = getDebugData('left', ev.type);
    log(ev.type);

});

hammerBack.on(hammerEvents, (ev) => {
    const action = { type: ev.type };
    const newState = backReducer(getState(), action);
    truncateTransforms(newState);
    setState(newState);
    updateUiByState(newState);
    debug.innerHTML = getDebugData('back', ev.type);
    log(ev.type);

});

hammerTop.on(hammerEvents, (ev) => {
    const action = { type: ev.type };
    const newState = topReducer(getState(), action);
    truncateTransforms(newState);
    setState(newState);
    updateUiByState(newState);
    debug.innerHTML = getDebugData('top', ev.type);
    log(ev.type);

});

hammerDown.on(hammerEvents, (ev) => {
    const action = { type: ev.type },
        newState = downReducer(getState(), action);
    truncateTransforms(newState);
    setState(newState);
    updateUiByState(newState);
    debug.innerHTML = getDebugData('down', ev.type);
    log(ev.type);

});


function rotateTo(stateCode) {
    let transformCodes = dictStateRotate[stateCode];
    if (transformCodes && transformCodes.length) {

        let transformKeyVals = transformCodes.map(t => dictTransform[t]),
            transforms = transformKeyVals.map(t => `rotate${t.key}(${t.val}deg)`),
            nextState = Object.assign({}, getState());

        nextState.value = stateCode;
        nextState.stateHistory.push(stateCode);
        nextState.actionHistory.push(`rotateTo: ${stateCode}`);
        nextState.transforms = transformKeyVals;

        setState(nextState);

        updateUiByState(nextState);

        return getState();
    }
}

function x() {
    const newState = frontReducer(getState(), { type: 'swipeup' });
    truncateTransforms(newState);
    setState(newState);
    updateUiByState(newState);
    debug.innerHTML = getDebugData('front', 'swipeup');
}

function _x() {
    const newState = frontReducer(getState(), { type: 'swipedown' });
    truncateTransforms(newState);
    setState(newState);
    updateUiByState(newState);
    debug.innerHTML = getDebugData('front', 'swipedown');
}


function y() {
    const newState = frontReducer(getState(), { type: 'swiperight' });
    truncateTransforms(newState);
    setState(newState);
    updateUiByState(newState);
    debug.innerHTML = getDebugData('front', 'swiperight');
}

function _y() {
    const newState = frontReducer(getState(), { type: 'swipeleft' });
    truncateTransforms(newState);
    setState(newState);
    updateUiByState(newState);
    debug.innerHTML = getDebugData('front', 'swipeleft');
}


function z() {
    const newState = topReducer(getState(), { type: 'swiperight' });
    truncateTransforms(newState);
    setState(newState);
    updateUiByState(newState);
    debug.innerHTML = getDebugData('top', 'swiperight');
}


function _z() {
    const newState = topReducer(getState(), { type: 'swipeleft' });
    truncateTransforms(newState);
    setState(newState);
    updateUiByState(newState);
    debug.innerHTML = getDebugData('top', 'swipeleft');
}


function uix() {
    ui({ key: 'x', val: 90 });
    debug.innerHTML = getDebugData('ui', 'x');
}

function ui_x() {
    ui({ key: 'x', val: -90 });
    debug.innerHTML = getDebugData('ui', '-x');
}


function uiy() {
    ui({ key: 'y', val: 90 });
    debug.innerHTML = getDebugData('ui', 'y');
}

function ui_y() {
    ui({ key: 'y', val: -90 });
    debug.innerHTML = getDebugData('ui', '-y');
}

function uiz() {
    ui({ key: 'z', val: 90 });
    debug.innerHTML = getDebugData('ui', 'z');
}

function ui_z() {
    ui({ key: 'z', val: -90 });
    debug.innerHTML = getDebugData('ui', '-z');
}


function ui(transformKeyVal) {
    let newState = cloneObject(getState());
    transformsApply(transformKeyVal, newState);
    truncateTransforms(newState);
    setState(newState);
    updateUiByState(newState);
}

function uiRotateTo(event) {
    let component = document.getElementById('cube-rotate-to');
    let value = component.querySelector('input').value;

    if (value) {
        rotateTo(value);
    }
}


initState();

const inputPlaceholder = Object.keys(STATES).join(' ');
const rotateToEl = document.getElementById('cube-rotate-to');
rotateToEl.querySelector('input').setAttribute('placeholder', inputPlaceholder);
rotateToEl.addEventListener('keypress', ev => {
    const key = ev.which || ev.keyCode;
    const ENTER = 13;
    if (key === ENTER) {
        uiRotateTo(event);
    }
});

window.app = window.cube = {
    rotateTo,
    uiRotateTo,
    x,
    _x,
    y,
    _y,
    z,
    _z,
    uix,
    ui_x,
    uiy,
    ui_y,
    uiz,
    ui_z,
    debug: {
        cubeEl: cubeElement,
        getState,
        STATES,
    }
};

export class App {
    constructor() {}
}