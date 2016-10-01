;
'use strict';

import '../styles/app.scss';

import frontReducer from './reducers/frontReducer';
import rightReducer from './reducers/rightReducer';
import topReducer from './reducers/topReducer';
import leftReducer from './reducers/leftReducer';
import backReducer from './reducers/backReducer';
import downReducer from './reducers/downReducer';


import { CUBE, ACTION } from './constants';
import { createNewState } from './state-machine';
import { log } from './logger';

log('App running');

const Hammer = window.Hammer;

function qs(expr, context) {
    return (context || document).querySelector(expr);
}

function qsa(expr, context) {
    return [].slice.call((context || document).querySelectorAll(expr), 0);
}

function byId(id) {
    return document.getElementById(id);
}

const options = {
    preventDefault: true
};

let state = {};

function initState() {
    state = {
        top: CUBE.TOP,
        front: CUBE.FRONT,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
    };
}



function formatDate(date) {
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

function setState(newState) {
    state = newState;
    return this;
}

function updateUiByState(newState) {
    cubeElement.style.transform = `rotateX(${newState.rotateX}deg) rotateY(${newState.rotateY}deg) rotateZ(${newState.rotateZ}deg)`;
}

function getDebugData(face, event) {
    return `
    <div class='event'>${face} ${event.type}</div>
    <div class='state'> ${JSON.stringify(state)}</div>
    <div class='transform'> ${cubeElement.style.transform}</div>
    <div class='time'> ${(formatDate(new Date()))}</div>
    `;
}

const debug = qs('.debug'),
    cubeElement = byId('cube'),
    frontElement = byId('front'),
    topElement = byId('top'),
    rightElement = byId('right'),
    leftElement = byId('left'),
    backElement = byId('back'),
    downElement = byId('down');

/* Init */
const hammerFront = new Hammer(frontElement, options);
hammerFront.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});
const hammerTop = new Hammer(topElement, options);
hammerTop.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});
const hammerRight = new Hammer(rightElement, options);
hammerRight.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});
const hammerBack = new Hammer(backElement, options);
hammerBack.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});
const hammerDown = new Hammer(downElement, options);
hammerDown.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});
const hammerLeft = new Hammer(leftElement, options);
hammerLeft.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
});
//-----------


/* Setup */
hammerFront.on("swipeleft swiperight swipeup swipedown", (ev) => {
    //log(ev);
    const action = { type: ev.type, payload: {} };
    const newState = frontReducer(state, action);
    updateUiByState(newState);
    setState(newState);

    debug.innerHTML = getDebugData('front', ev);
});

hammerRight.on("swipeleft swiperight swipeup swipedown", (ev) => {
    //log(ev);
    const action = { type: ev.type, payload: {} };
    const newState = rightReducer(state, action);
    updateUiByState(newState);
    setState(newState);

    debug.innerHTML = getDebugData('right', ev);
});
hammerLeft.on("swipeleft swiperight swipeup swipedown", (ev) => {
    //log(ev);
    const action = { type: ev.type, payload: {} };
    const newState = leftReducer(state, action);
    updateUiByState(newState);
    setState(newState);

    debug.innerHTML = getDebugData('left', ev);
});

hammerBack.on("swipeleft swiperight swipeup swipedown", (ev) => {
    //log(ev);
    const action = { type: ev.type, payload: {} };
    const newState = backReducer(state, action);
    updateUiByState(newState);
    setState(newState);

    debug.innerHTML = getDebugData('back', ev);
});

hammerTop.on("swipeleft swiperight swipeup swipedown", (ev) => {
    debug.innerHTML = getDebugData('top', ev);
});

hammerDown.on("swipeleft swiperight swipeup swipedown", (ev) => {
    debug.innerHTML = getDebugData('down', ev);
});



initState();


export class App {
    constructor() {}
}