import { CUBE, ACTION } from '../constants';
import { log } from '../logger';
import { dictActionTypes, dictDegree } from '../dictionaries/dictionary';
import { dictTable } from '../dictionaries/dictTable';

export default function rightReducer(state, action) {

    let actionType = dictActionTypes[action.type];
    let actionCode = `r${actionType}`;
    let stateAndUi = dictTable[state.value][actionCode];
    let transform = dictDegree[stateAndUi.ui];

    let nextState = Object.assign({}, state);

    nextState.value = stateAndUi.state;
    nextState.stateHistory.push(stateAndUi.state);
    nextState.actionHistory.push(actionCode);
    nextState.transforms.push(transform);

    return nextState;
}