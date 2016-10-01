;
'use strict';

const log = console.log.bind(console);

log('App running');

import '../styles/app.scss';

const Hammer = window.Hammer;

(() => {

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

    const CUBE = {
        TOP: 'top',
        FRONT: 'front',
        RIGHT: 'right',
        BACK: 'back',
        LEFT: 'left',
        DOWN: 'down',
    };

    const ACTION = {
        swipeleft: 'swipeleft',
        swiperight: 'swiperight',
        swipeup: 'swipeup',
        swipedown: 'swipedown',
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



    function createNewState(currentState, update) {
        let nextState = Object.assign({}, currentState, { top: update.top, front: update.front });
        nextState.rotateX += update.rotateX || 0;
        nextState.rotateY += update.rotateY || 0;
        nextState.rotateZ += update.rotateZ || 0;
        //log(nextState);
        return nextState;
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

    // Inspired by Redux
    // By state and intent of action, return new state
    function frontReducer(state, action) {

        let newState = state;

        switch (action.type) {
            case ACTION.swipeleft:
                if (state.top === CUBE.TOP) {
                    if (state.front === CUBE.FRONT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.RIGHT, rotateY: -90 });
                    if (state.front === CUBE.RIGHT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.BACK, rotateY: -90 });
                    if (state.front === CUBE.BACK)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.LEFT, rotateY: -90 });
                    if (state.front === CUBE.LEFT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.FRONT, rotateY: -90 });
                }
                break;

            case ACTION.swiperight:
                if (state.top === CUBE.TOP) {
                    if (state.front === CUBE.FRONT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.LEFT, rotateY: 90 });
                    if (state.front === CUBE.LEFT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.BACK, rotateY: 90 });
                    if (state.front === CUBE.BACK)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.RIGHT, rotateY: 90 });
                    if (state.front === CUBE.RIGHT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.FRONT, rotateY: 90 });
                }
                break;

            case ACTION.swipeup:
                if (state.top === CUBE.TOP) {
                    if (state.front === CUBE.FRONT)
                        newState = createNewState(state, { top: CUBE.FRONT, front: CUBE.DOWN, rotateX: 90 });
                    if (state.front === CUBE.LEFT) {

                        newState = createNewState(state, { top: CUBE.FRONT, front: CUBE.LEFT, rotateX: 90, rotateY: -90, rotateZ: -90 });;
                        log(newState);
                    }

                    if (state.front === CUBE.BACK)
                        newState = createNewState(state, { top: CUBE.FRONT, front: CUBE.BACK, rotateX: 90 });
                    if (state.front === CUBE.RIGHT)
                        newState = createNewState(state, { top: CUBE.FRONT, front: CUBE.RIGHT, rotateX: 90 });
                }

                break;
        }
        return newState;
    }

    function rightReducer(state, action) {

        let newState = state;

        switch (action.type) {
            case ACTION.swipeleft:
                if (state.top === CUBE.TOP) {
                    if (state.front === CUBE.FRONT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.RIGHT, rotateY: -90 });
                    if (state.front === CUBE.RIGHT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.BACK, rotateY: -90 });
                    if (state.front === CUBE.BACK)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.LEFT, rotateY: -90 });
                    if (state.front === CUBE.LEFT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.FRONT, rotateY: -90 });
                }
                break;

            case ACTION.swiperight:
                if (state.top === CUBE.TOP) {
                    if (state.front === CUBE.FRONT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.LEFT, rotateY: 90 });
                    if (state.front === CUBE.LEFT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.BACK, rotateY: 90 });
                    if (state.front === CUBE.BACK)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.RIGHT, rotateY: 90 });
                    if (state.front === CUBE.RIGHT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.FRONT, rotateY: 90 });
                }
                break;
        }
        return newState;
    }

    function leftReducer(state, action) {

        let newState = state;

        switch (action.type) {
            case ACTION.swipeleft:
                if (state.top === CUBE.TOP) {
                    if (state.front === CUBE.FRONT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.RIGHT, rotateY: -90 });
                    if (state.front === CUBE.RIGHT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.BACK, rotateY: -90 });
                    if (state.front === CUBE.BACK)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.LEFT, rotateY: -90 });
                    if (state.front === CUBE.LEFT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.FRONT, rotateY: -90 });
                }
                break;

            case ACTION.swiperight:
                if (state.top === CUBE.TOP) {
                    if (state.front === CUBE.FRONT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.LEFT, rotateY: 90 });
                    if (state.front === CUBE.LEFT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.BACK, rotateY: 90 });
                    if (state.front === CUBE.BACK)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.RIGHT, rotateY: 90 });
                    if (state.front === CUBE.RIGHT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.FRONT, rotateY: 90 });
                }
                break;
        }
        return newState;
    }

    function backReducer(state, action) {

        let newState = state;

        switch (action.type) {
            case ACTION.swipeleft:
                if (state.top === CUBE.TOP) {
                    if (state.front === CUBE.FRONT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.RIGHT, rotateY: -90 });
                    if (state.front === CUBE.RIGHT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.BACK, rotateY: -90 });
                    if (state.front === CUBE.BACK)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.LEFT, rotateY: -90 });
                    if (state.front === CUBE.LEFT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.FRONT, rotateY: -90 });
                }
                break;

            case ACTION.swiperight:
                if (state.top === CUBE.TOP) {
                    if (state.front === CUBE.FRONT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.LEFT, rotateY: 90 });
                    if (state.front === CUBE.LEFT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.BACK, rotateY: 90 });
                    if (state.front === CUBE.BACK)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.RIGHT, rotateY: 90 });
                    if (state.front === CUBE.RIGHT)
                        newState = createNewState(state, { top: CUBE.TOP, front: CUBE.FRONT, rotateY: 90 });
                }
                break;
        }
        return newState;
    }

    function topReducer(state, action) {
        log('todo');
        let newState = state;
        return newState;
    }

    function downReducer(state, action) {
        log('todo');
        let newState = state;
        return newState;
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

})();



export class App {
    constructor() {}
}