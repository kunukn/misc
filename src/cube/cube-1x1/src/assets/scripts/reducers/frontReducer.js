import { CUBE, ACTION } from '../constants';
import { createNewState } from '../state-machine';
import { log } from '../logger';

// By state and intent of action, return new state
export default function frontReducer(state, action) {

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