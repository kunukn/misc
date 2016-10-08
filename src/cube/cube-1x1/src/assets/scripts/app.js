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

import { dictDegree, dictStateRotate, dictTransform } from './dictionaries/dictionary';

log('App running');

const Hammer = window.Hammer;

const hammerOptions = {
    preventDefault: true
};

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
        let transforms = dictStateRotate[state.value];
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
    const newState = frontReducer(getState(), action);

    //   truncateTransforms(newState);
    updateUiByState(newState);
    setState(newState);

    debug.innerHTML = getDebugData('front', ev);
});

hammerRight.on(hammerEvents, (ev) => {
    const action = { type: ev.type };
    const newState = rightReducer(getState(), action);
    updateUiByState(newState);
    setState(newState);

    debug.innerHTML = getDebugData('right', ev);
});
hammerLeft.on(hammerEvents, (ev) => {
    const action = { type: ev.type };
    const newState = leftReducer(getState(), action);
    updateUiByState(newState);
    setState(newState);

    debug.innerHTML = getDebugData('left', ev);
});

hammerBack.on(hammerEvents, (ev) => {
    const action = { type: ev.type };
    const newState = backReducer(getState(), action);
    updateUiByState(newState);
    setState(newState);

    debug.innerHTML = getDebugData('back', ev);
});

hammerTop.on(hammerEvents, (ev) => {
    const action = { type: ev.type };
    const newState = topReducer(getState(), action);
    updateUiByState(newState);
    setState(newState);

    debug.innerHTML = getDebugData('top', ev);
});

hammerDown.on(hammerEvents, (ev) => {
    const action = { type: ev.type };
    const newState = downReducer(getState(), action);
    updateUiByState(newState);
    setState(newState);

    debug.innerHTML = getDebugData('down', ev);
});



initState();

function rotateTo(stateCode) {
    let transformCodes = dictStateRotate[stateCode];
    if (transformCodes && transformCodes.length) {

        let transformKeyVals = transformCodes.map(t => dictTransform[t]);

        let transforms = transformKeyVals.map(t => `rotate${t.key}(${t.val}deg)`);

        let transformCss = transforms.join(' ');

        let nextState = Object.assign({}, getState());

        nextState.value = stateCode;
        nextState.stateHistory.push(stateCode);
        nextState.actionHistory.push(`rotateTo: ${stateCode}`);
        nextState.transforms = [transformCss];

        setState(nextState);

        cubeElement.style.transform = transformCss;

        return getState();
    }
}

function x() {
    const newState = frontReducer(getState(), { type: 'swipeup' });
    //   truncateTransforms(newState);
    updateUiByState(newState);
    setState(newState);
    debug.innerHTML = getDebugData('front', 'swipeup');
}

function _x() {
    const newState = frontReducer(getState(), { type: 'swipedown' });
    //   truncateTransforms(newState);
    updateUiByState(newState);
    setState(newState);
    debug.innerHTML = getDebugData('front', 'swipedown');
}

function tempY_() {
    let t = getComputedStyle(cubeElement).transform;
    t = t == 'none' ? '' : t;
    cubeElement.style.transform = `${t} rotateY(-90deg)`;
    log(cubeElement.style.transform);
}

function tempY() {
    let t = getComputedStyle(cubeElement).transform;
    t = t == 'none' ? '' : t;
    cubeElement.style.transform = `${t} rotateY(90deg)`;
    log(cubeElement.style.transform);
}


window.cube = {
    rotateTo,
    x,
    _x,
    debug: {
        cubeElement,
        y: tempY,
        _y: tempY_,
        getState,
    }
};

export class App {
    constructor() {}
}