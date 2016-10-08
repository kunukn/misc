import { CUBE, ACTION } from '../constants';
import { log } from '../logger';
import { dictActionTypes, dictDegree } from '../dictionary';
import { dictBackAction as dictAction } from '../dictionaries/dict-back-action';

export default function backReducer(state, action) {

    let actionType = dictActionTypes[action.type];
    let actionCode = `b${actionType}`;
    let stateAndUi = dictAction[actionCode][state.value];
    let transform = dictDegree[stateAndUi.ui];

    let nextState = Object.assign({}, state);

    nextState.value = stateAndUi.state;
    nextState.stateHistory.push(stateAndUi.state);
    nextState.actionHistory.push(actionCode);
    nextState.transforms.push(transform);

    return nextState;
}