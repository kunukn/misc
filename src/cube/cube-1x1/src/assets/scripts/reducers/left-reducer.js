import { CUBE, ACTION } from '../constants';
import { log } from '../logger';
import { dictActionTypes, dictDegree } from '../dictionaries/dictionary';
import { dictLeftAction as dictAction } from '../dictionaries/dict-left-action';

export default function leftReducer(state, action) {

    let actionType = dictActionTypes[action.type];
    let actionCode = `l${actionType}`;
    let stateAndUi = dictAction[actionCode][state.value];
    let transform = dictDegree[stateAndUi.ui];

    let nextState = Object.assign({}, state);

    nextState.value = stateAndUi.state;
    nextState.stateHistory.push(stateAndUi.state);
    nextState.actionHistory.push(actionCode);
    nextState.transforms.push(transform);

    return nextState;
}