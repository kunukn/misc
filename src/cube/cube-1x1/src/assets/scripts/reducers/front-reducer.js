import { log } from '../logger';
import { dictActionTypes } from '../dictionaries/dictionary';
import { dictFrontAction as dictAction } from '../dictionaries/dict-front-action';
import { reducer } from './reducer-util';

// By state and intent of action, return new state
export default function frontReducer(state, action) {
    const actionType = dictActionTypes[action.type],
        actionCode = `f${actionType}`;

    return reducer(state, actionCode, dictAction);
}