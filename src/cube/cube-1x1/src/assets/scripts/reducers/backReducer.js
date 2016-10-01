import { CUBE, ACTION } from '../constants';
import { createNewState } from '../state-machine';
import { log } from '../logger';

export default function backReducer(state, action) {

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