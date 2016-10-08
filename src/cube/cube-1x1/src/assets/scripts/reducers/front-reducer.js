import { CUBE, ACTION } from '../constants';
import { log } from '../logger';
import { dictActionTypes, dictDegree } from '../dictionary';
import { dictFrontAction as dictAction } from '../dictionaries/dict-front-action';

// By state and intent of action, return new state
export default function frontReducer(state, action) {
    let actionType = dictActionTypes[action.type];
    let actionCode = `f${actionType}`;
    let stateAndUi = dictAction[actionCode][state.value];
    let transform = dictDegree[stateAndUi.ui];
   
    let nextState = Object.assign({}, state);

    nextState.value = stateAndUi.state;
    nextState.stateHistory.push(stateAndUi.state);
    nextState.actionHistory.push(actionCode);
    nextState.transforms.push(transform);

    return nextState;
}