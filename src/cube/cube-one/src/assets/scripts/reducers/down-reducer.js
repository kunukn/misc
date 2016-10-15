import { CUBE, ACTION } from '../constants';
import { log } from '../logger';
import { dictActionTypes, dictDegree } from '../dictionaries/dictionary';
import { dictDownAction as dictAction } from '../dictionaries/dict-down-action';
import { cloneObject, transformsApply } from '../cube-util';
import { reducer } from './reducer-util';


export default function downReducer(state, action) {
    const actionType = dictActionTypes[action.type],
        actionCode = `d${actionType}`;

    return reducer(state, actionCode, dictAction);
}