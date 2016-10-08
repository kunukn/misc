import { CUBE, ACTION } from '../constants';
import { log } from '../logger';
import { dictActionTypes, dictDegree, dictTransform } from '../dictionaries/dictionary';
import { dictFrontAction as dictAction } from '../dictionaries/dict-front-action';

// By state and intent of action, return new state
export default function frontReducer(state, action) {
    const actionType = dictActionTypes[action.type],
        actionCode = `f${actionType}`,
        calculated = dictAction[actionCode][state.value],
        transformKeyVal = dictTransform[calculated.ui],
        nextState = Object.assign({}, state);

    let pushTransform = true;
    if (nextState.transforms.length) {
        let lastIndex = nextState.transforms.length - 1;
        if (nextState.transforms[lastIndex].key === transformKeyVal.key) {
            nextState.transforms[lastIndex].val += transformKeyVal.val;
            pushTransform = false;
        }
    }

    nextState.value = calculated.state;
    nextState.stateHistory.push(calculated.state);
    nextState.actionHistory.push(actionCode);
    if (pushTransform) {
        nextState.transforms.push(transformKeyVal);
    }

    return nextState;
}