import { log } from '../logger';
import { dictActionTypes } from '../dictionaries/dictionary';
import { dictBackAction as dictAction } from '../dictionaries/dict-back-action';
import { reducer } from './reducer-util';

export default function backReducer(state, action) {

    const actionType = dictActionTypes[action.type],
        actionCode = `b${actionType}`;

    return reducer(state, actionCode, dictAction);
}