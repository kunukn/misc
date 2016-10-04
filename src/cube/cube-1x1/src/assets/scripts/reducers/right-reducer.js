import { CUBE, ACTION } from '../constants';
import { log } from '../logger';
import { dictActionTypes, dictDegree, dictUi } from '../dictionary';
import { getNextState } from '../getNextState';

export default function rightReducer(state, action) {

    let actionType = dictActionTypes[action.type];
    let actionCode = `r${actionType}`;
    let stateAndUi = getNextState(state.value, actionCode);
    let transform = dictDegree[stateAndUi.ui];

    let nextState = Object.assign({}, state);

    nextState.value = stateAndUi.state;
    nextState.stateHistory.push(stateAndUi.state);
    nextState.actionHistory.push(actionCode);
    nextState.transforms.push(transform);

    return nextState;
}