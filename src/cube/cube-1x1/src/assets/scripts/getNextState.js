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

function getNextState(state, action) {

    let direction = dictUi[action];

    let top = state[0],
        front = state[1],
        nextTop,
        nextFront;

    let actionOnFace = action[0];
    let swipe = action[1];


    if (swipe === '^' || swipe === 'v') {
        if (actionOnFace !== top && actionOnFace !== front) {
            if (direction === 'x') direction = '-z';
            else if (direction === '-x') direction = 'z';

            log('z used');
        }
    }

    switch (direction) {
        case 'x':
            nextTop = front;
            nextFront = opposite[top];
            return { state: `${nextTop}${nextFront}`, ui: direction };
        case '-x':
            nextTop = opposite[front];
            nextFront = top;;
            return { state: `${nextTop}${nextFront}`, ui: direction };
        case 'y':
            nextTop = top;
            nextFront = getLeft(state);
            return { state: `${nextTop}${nextFront}`, ui: direction };
        case '-y':
            nextTop = top;
            nextFront = getRight(state);
            return { state: `${nextTop}${nextFront}`, ui: direction };
        case 'z':
            nextTop = getLeft(state);
            nextFront = front;
            return { state: `${nextTop}${nextFront}`, ui: direction };
        case '-z':
            nextTop = getRight(state);
            nextFront = front;
            return { state: `${nextTop}${nextFront}`, ui: direction };

        default:
            return undefined;
    }
}

export { getNextState };