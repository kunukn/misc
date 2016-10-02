import { dictUi } from './dictionary';

let state,
    act,
    dir;

const dictState = [];

const opposite = [];
opposite['t'] = 'd';
opposite['d'] = 't';
opposite['r'] = 'l';
opposite['l'] = 'r';
opposite['f'] = 'b';
opposite['b'] = 'f';

const left = [];
left['tf'] = 'l';
left['tr'] = 'f';
left['tb'] = 'r';
left['tl'] = 'l';

left['ft'] = 'r';
left['fl'] = 't';
left['fd'] = 'l';
left['fr'] = 'd';

left['rt'] = 'b';
left['rf'] = 't';
left['rd'] = 'f';
left['rb'] = 'd';

left['df'] = 'r';
left['dl'] = 'f';
left['db'] = 'l';
left['dr'] = 'b';

left['bt'] = 'l';
left['br'] = 't';
left['bd'] = 'r';
left['bl'] = 'd';

left['lt'] = 'f';
left['lb'] = 't';
left['ld'] = 'b';
left['lf'] = 'd';

function getLeft(state) {
    return left[state];
}

function getRight(state) {
    return opposite[left[state]];
}


function nextState(state, action) {
    let top = state[0],
        front = state[1],
        nextTop,
        nextFront;

    switch (action) {
        case 'x':
            nextTop = front;
            nextFront = opposite[top];
            return `${nextTop}${nextFront}`;
        case '-x':
            nextTop = opposite[front];
            nextFront = top;;
            return `${nextTop}${nextFront}`;
        case 'y':
            nextTop = top;
            nextFront = getLeft(state);
            return `${nextTop}${nextFront}`;
        case '-y':
            nextTop = top;
            nextFront = getRight(state);
            return `${nextTop}${nextFront}`;
        case 'z':
            nextTop = getLeft(state);
            nextFront = front;
            return `${nextTop}${nextFront}`;
        case '-z':
            nextTop = getRight(state);
            nextFront = front;
            return `${nextTop}${nextFront}`;

        default:
            return state;
    }
}

state = 'tf';
dictState[state] = [];
dictState[state]['x'] = 'fd';
dictState[state]['-x'] = 'bt';
dictState[state]['y'] = 'tl';
dictState[state]['-y'] = 'tr';
dictState[state]['z'] = 'lf';
dictState[state]['-z'] = 'rf';

state = 'tr';
dictState[state] = [];
dictState[state]['x'] = 'rd';
dictState[state]['-x'] = 'lt';
dictState[state]['y'] = 'tf';
dictState[state]['-y'] = 'tb';
dictState[state]['z'] = 'fr';
dictState[state]['-z'] = 'br';

state = 'tl';
dictState[state] = [];
dictState[state]['x'] = 'ld';
dictState[state]['-x'] = 'rt';
dictState[state]['y'] = 'tb';
dictState[state]['-y'] = 'tf';
dictState[state]['z'] = 'bl';
dictState[state]['-z'] = 'fl';

state = 'tb';
dictState[state] = [];
dictState[state]['x'] = 'bd';
dictState[state]['-x'] = 'ft';
dictState[state]['y'] = 'tr';
dictState[state]['-y'] = 'tl';
dictState[state]['z'] = 'rb';
dictState[state]['-z'] = 'lb';

state = 'ft';
dictState[state] = [];
dictState[state]['x'] = 'tb';
dictState[state]['-x'] = 'df';
dictState[state]['y'] = 'fr';
dictState[state]['-y'] = 'fl';
dictState[state]['z'] = 'rt';
dictState[state]['-z'] = 'lt';

state = 'fl';
dictState[state] = [];
dictState[state]['x'] = 'lb';
dictState[state]['-x'] = 'rf';
dictState[state]['y'] = 'ft';
dictState[state]['-y'] = 'fd';
dictState[state]['z'] = 'tl';
dictState[state]['-z'] = 'dl';


state = 'fd';
dictState[state] = [];
dictState[state]['x'] = 'db';
dictState[state]['-x'] = 'tf';
dictState[state]['y'] = 'fl';
dictState[state]['-y'] = 'fr';
dictState[state]['z'] = 'ld';
dictState[state]['-z'] = 'rd';

state = 'fr';
dictState[state] = [];
dictState[state]['x'] = 'rb';
dictState[state]['-x'] = 'lf';
dictState[state]['y'] = 'fd';
dictState[state]['-y'] = 'ft';
dictState[state]['z'] = 'dr';
dictState[state]['-z'] = 'tr';

state = 'rt';
dictState[state] = [];
dictState[state]['x'] = 'tl';
dictState[state]['-x'] = 'dr';
dictState[state]['y'] = 'rb';
dictState[state]['-y'] = 'rf';
dictState[state]['z'] = 'bt';
dictState[state]['-z'] = 'ft';

state = 'rf';
dictState[state] = [];
dictState[state]['x'] = 'fl';
dictState[state]['-x'] = 'br';
dictState[state]['y'] = 'rt';
dictState[state]['-y'] = 'rd';
dictState[state]['z'] = 'tf';
dictState[state]['-z'] = 'df';

state = 'rd';
dictState[state] = [];
dictState[state]['x'] = 'dl';
dictState[state]['-x'] = 'tr';
dictState[state]['y'] = 'rf';
dictState[state]['-y'] = 'rb';
dictState[state]['z'] = 'fd';
dictState[state]['-z'] = 'bd';

state = 'rb';
dictState[state] = [];
dictState[state]['x'] = 'bl';
dictState[state]['-x'] = 'fr';
dictState[state]['y'] = 'rd';
dictState[state]['-y'] = 'rt';
dictState[state]['z'] = 'db';
dictState[state]['-z'] = 'tb';

state = 'df';
dictState[state] = [];
dictState[state]['x'] = 'ft';
dictState[state]['-x'] = 'bd';
dictState[state]['y'] = 'dr';
dictState[state]['-y'] = 'dl';
dictState[state]['z'] = 'rf';
dictState[state]['-z'] = 'lf';

state = 'dl';
dictState[state] = [];
dictState[state]['x'] = 'lt';
dictState[state]['-x'] = 'rd';
dictState[state]['y'] = 'df';
dictState[state]['-y'] = 'db';
dictState[state]['z'] = 'fl';
dictState[state]['-z'] = 'bl';

state = 'db';
dictState[state] = [];
dictState[state]['x'] = 'bt';
dictState[state]['-x'] = 'fd';
dictState[state]['y'] = 'dl';
dictState[state]['-y'] = 'dr';
dictState[state]['z'] = 'lb';
dictState[state]['-z'] = 'rb';

state = 'dr';
dictState[state] = [];
dictState[state]['x'] = 'rt';
dictState[state]['-x'] = 'rt';
dictState[state]['y'] = 'db';
dictState[state]['-y'] = 'df';
dictState[state]['z'] = 'br';
dictState[state]['-z'] = 'fr';

state = 'bt';
dictState[state] = [];
dictState[state]['x'] = 'tf';
dictState[state]['-x'] = 'db';
dictState[state]['y'] = 'bl';
dictState[state]['-y'] = 'br';
dictState[state]['z'] = 'lt';
dictState[state]['-z'] = 'rt';


function getNextState(state, action) {

    let direction = dictUi[action];
    return { state: nextState(action, direction), ui: direction };
    //    return { state: dictState[state][direction], ui: direction };
}

export { getNextState };