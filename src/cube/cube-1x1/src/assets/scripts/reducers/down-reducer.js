import { CUBE, ACTION } from '../constants';
import { log } from '../logger';
import { dictActionTypes, dictDegree } from '../dictionary';
import { dictDownAction as dictAction } from '../dictionaries/dict-down-action';

export default function downReducer(state, action) {

    let actionType = dictActionTypes[action.type];
    let actionCode = `d${actionType}`;
    let stateAndUi = getNextState(state.value, actionCode);
    let transform = dictDegree[stateAndUi.ui];

    let nextState = Object.assign({}, state);

    nextState.value = stateAndUi.state;
    nextState.stateHistory.push(stateAndUi.state);
    nextState.actionHistory.push(actionCode);
    nextState.transforms.push(transform);

    return nextState;
}