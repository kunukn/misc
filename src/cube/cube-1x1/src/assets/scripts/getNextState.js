import { dictUi } from './dictionary';
import { log } from './logger';

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
left['tl'] = 'b';

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
    const l = left[state];
    if (!l || l.length !== 1) throw new Error('getLeft - ' + l);

    return l;
}

function getRight(state) {
    return opposite[getLeft(state)];
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

function getNextState(state, action) {
    let direction = dictUi[action];
    return { state: nextState(state, direction), ui: direction };
}

export { getNextState };