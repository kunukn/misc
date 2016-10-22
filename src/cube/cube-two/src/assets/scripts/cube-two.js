'use strict';

import { debug, log, error } from './logger';

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

import { STATES, STATES_ARRAY, KEY } from './constants';

function rAF(callback) {
    window.requestAnimationFrame(callback);
}

function nextFrame(callback) {
    rAF(() => {
        rAF(callback);
    });
}

const EVENT_NAMES = {
    init: 'init',
    statechange: 'statechange',
    beforerotate: 'beforerotate',
    afterrotate: 'afterrotate',
};



class CubeTwo {
    constructor(config) {

        if (!config || !config.cubeComponent) {
            error(`CubeTwo element was not provided: ${config.cubeComponent}`);
            return;
        }

        this.cubeComponentEl = config.cubeComponent;

        this._appState = {
            rotateEnabled: true,
        };

        this._initCallbacks();
    }


    _initCallbacks() {
        this.callbacks = {};
        Object.keys(EVENT_NAMES).forEach((eventName, index) => this.callbacks[eventName] = []);
    }

    addCallbackForEvent(eventName, callback) {
        let collection = this.callbacks[(eventName = eventName.toLowerCase())];
        if (collection && typeof callback === 'function') {
            collection.push(callback);
        }
    };

    _triggerEvent(eventName, payload) {
        let collection = this.callbacks[eventName] || [],
            i, max;
        for (i = 0, max = collection.length; i < max; i++) {
            collection[i].call(this, eventName, payload);
        }
    }


    getState() {
        return cloneObject(this._appState);
    }

    _setState(state) {
            this._triggerEvent('statechange', {
            });
    }

    _transitionEnd(ev) {
        const cubeEl = this.cubeEl;
        cubeEl.style.transition = `0s`;
        nextFrame(_ => {
            this._updateUiFaces();
            cubeEl.style.transform = '';
            rAF(_ => {
                cubeEl.style.transition = '';

                const state = this.getState();
                state.rotateEnabled = true;
                this._setState(state);
                this._triggerEvent('afterrotate', {
                });
            });
        });
    }

}

export default CubeTwo;