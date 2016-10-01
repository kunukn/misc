import { CUBE, ACTION } from '../constants';
import { createNewState } from '../state-machine';
import { log } from '../logger';


export default function downReducer(state, action) {
    log('todo');
    let newState = state;
    return newState;
}