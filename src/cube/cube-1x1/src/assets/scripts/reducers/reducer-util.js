import { log } from '../logger';
import { dictActionTypes, dictTransform } from '../dictionaries/dictionary';
import { cloneObject, transformsApply } from '../cube-util';

export function reducer(state, actionCode, dictAction) {
    const calculated = cloneObject(dictAction[actionCode][state.value]),
        transformKeyVal = cloneObject(dictTransform[calculated.ui]),
        nextState = cloneObject(state);

    transformsApply(transformKeyVal, nextState);

    nextState.value = calculated.state;
    nextState.stateHistory.push(calculated.state);
    nextState.actionHistory.push(actionCode);

    return nextState;
}