export function createNewState(currentState, update) {
    let nextState = Object.assign({}, currentState, { top: update.top, front: update.front });
    nextState.rotateX += update.rotateX || 0;
    nextState.rotateY += update.rotateY || 0;
    nextState.rotateZ += update.rotateZ || 0;
    return nextState;
}