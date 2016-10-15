import { STATES, opposite, left } from '../constants';
import { nextState, getRight, getLeft, getOpposite, getBelow } from '../cube-util';
import deepFreeze from 'deep-freeze';

const dictCube = [];

Object.keys(STATES).forEach(i => dictCube[i] = []);

function split(state) {
    return { t: state[0], f: state[1] };
}

let index, tf, next, state = nextState.first;

for (index = 0; index < nextState.stateCount; index++) {

    tf = split(state);
    dictCube[state]['x'] = `${tf.f}${opposite[tf.t]}`;
    dictCube[state]['-x'] = `${opposite[tf.f]}${tf.t}`;
    dictCube[state]['y'] = `${tf.t}${getLeft(state)}`;
    dictCube[state]['-y'] = `${tf.t}${getRight(state)}`;
    dictCube[state]['z'] = `${getLeft(state)}${tf.f}`;
    dictCube[state]['-z'] = `${getRight(state)}${tf.f}`;

    next = nextState.get(state);
    state = next.state;
}

deepFreeze(dictCube);
export { dictCube };