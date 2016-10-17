import { log } from '../logger';
import { dictActionTypes } from '../dictionaries/dictionary';
import { dictRightAction as dictAction } from '../dictionaries/dict-right-action';
import { reducer } from './reducer-util';

export default function rightReducer(state, action) {
    const actionType = dictActionTypes[action.type],
        actionCode = `r${actionType}`;

    return reducer(state, actionCode, dictAction);
}