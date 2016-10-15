import { log } from '../logger';
import { dictActionTypes } from '../dictionaries/dictionary';
import { dictLeftAction as dictAction } from '../dictionaries/dict-left-action';
import { reducer } from './reducer-util';

export default function leftReducer(state, action) {
    const actionType = dictActionTypes[action.type],
        actionCode = `l${actionType}`;

    return reducer(state, actionCode, dictAction);
}