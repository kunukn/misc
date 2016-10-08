import { opposite, left } from './constants';

export function getLeft(stateCode) {
    const l = left[stateCode];
    if (!l || l.length !== 1) throw new Error('getLeft - ' + l);

    return l;
}

export function getRight(stateCode) {
    return opposite[getLeft(stateCode)];
}