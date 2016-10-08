;
'use strict';

import '../styles/app.scss';

import frontReducer from './reducers/front-reducer';
import rightReducer from './reducers/right-reducer';
import topReducer from './reducers/top-reducer';
import leftReducer from './reducers/left-reducer';
import backReducer from './reducers/back-reducer';
import downReducer from './reducers/down-reducer';


import { CUBE, ACTION } from './constants';
import { log } from './logger';

import { qs, qsa, byId } from './query';

import { dictDegree, dictRotate } from './dictionary';

log('App running');

const Hammer = window.Hammer;

const hammerOptions = {
    preventDefault: true
};

let state = {};

function initState() {
    state = {
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
    state = newState;
    return this;
}

function updateUiByState(newState) {
    if (newState.transforms && newState.transforms.length) {
        let transform = newState.transforms.join(' ');
        cubeElement.style.transform = `${transform}`;
    }
    return this;
}

function truncateTransforms(state) {
    if (state.transforms.length >= 4) {
        let transforms = dictRotate[state.value];
        if (transforms && transforms.length) {
            state.transforms = transforms.map(t => {
                return dictDegree[t];
            });

            log('replaced transform');
        }
    }
    return this;
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
    cubeElement = byId('cube-1x1'),
    frontElement = byId('front'),
    topElement = byId('top'),
    rightElement = byId('right'),
    leftElement = byId('left'),
    backElement = byId('back'),
    downElement = byId('down');


cubeElement.addEventListener('transitionend', (ev) => {
    if (state.transforms && state.transforms.length >= 4) {
        //    cubeElement.classList.add('u-no-transition-important');
        //   cubeElement.offsetHeight;
        //cubeElement.classList.remove('u-no-transition-important');
    }

});



/* Init */
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
    const action = { type: ev.type };
    const newState = frontReducer(state, action);

    //   truncateTransforms(newState);
    updateUiByState(newState);
    setState(newState);

    debug.innerHTML = getDebugData('front', ev);
});

hammerRight.on(hammerEvents, (ev) => {
    const action = { type: ev.type };
    const newState = rightReducer(state, action);
    updateUiByState(newState);
    setState(newState);

    debug.innerHTML = getDebugData('right', ev);
});
hammerLeft.on(hammerEvents, (ev) => {
    const action = { type: ev.type };
    const newState = leftReducer(state, action);
    updateUiByState(newState);
    setState(newState);

    debug.innerHTML = getDebugData('left', ev);
});

hammerBack.on(hammerEvents, (ev) => {
    const action = { type: ev.type };
    const newState = backReducer(state, action);
    updateUiByState(newState);
    setState(newState);

    debug.innerHTML = getDebugData('back', ev);
});

hammerTop.on(hammerEvents, (ev) => {
    debug.innerHTML = getDebugData('top', ev);
});

hammerDown.on(hammerEvents, (ev) => {
    debug.innerHTML = getDebugData('down', ev);
});



initState();

function rotateTo(stateCode) {
    let transforms = dictRotate[stateCode];
    if (transforms && transforms.length) {
        transforms = transforms.map(t => {
            return dictDegree[t];
        });
        let transformCss = transforms.join(' ');
        cubeElement.style.transform = transformCss;
    }
}

function x() {
    const newState = frontReducer(state, {type:'swipeup'});
    //   truncateTransforms(newState);
    updateUiByState(newState);
    setState(newState);
    debug.innerHTML = getDebugData('front', 'swipeup');
}

function _x() {
    const newState = frontReducer(state, {type: 'swipedown'});
    //   truncateTransforms(newState);
    updateUiByState(newState);
    setState(newState);
    debug.innerHTML = getDebugData('front', 'swipedown');
}



window.cube = {
    rotateTo,
    x,
    _x,
};

export class App {
    constructor() {}
}