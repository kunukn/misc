import { CUBE, ACTION } from '../constants';
import { log } from '../logger';
import { dictActionTypes, dictDegree, dictTransform } from '../dictionaries/dictionary';
import { dictFrontAction as dictAction } from '../dictionaries/dict-front-action';
import { cloneObject, transformsApply } from '../cube-util';


// By state and intent of action, return new state
export default function frontReducer(state, action) {
    const actionType = dictActionTypes[action.type],
        actionCode = `f${actionType}`,
        calculated = dictAction[actionCode][state.value],
        transformKeyVal = dictTransform[calculated.ui],
        nextState = cloneObject(state);

    transformsApply(transformKeyVal, nextState);

    nextState.value = calculated.state;
    nextState.stateHistory.push(calculated.state);
    nextState.actionHistory.push(actionCode);

    return nextState;
}