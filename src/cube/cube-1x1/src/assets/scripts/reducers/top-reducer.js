import { log } from '../logger';
import { dictActionTypes } from '../dictionaries/dictionary';
import { dictTopAction as dictAction } from '../dictionaries/dict-top-action';
import { reducer } from './reducer-util';

export default function topReducer(state, action) {
    const actionType = dictActionTypes[action.type],
        actionCode = `t${actionType}`;

    return reducer(state, actionCode, dictAction);
}