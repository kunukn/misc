import { opposite, left } from './constants';
import { log } from './logger';

export function getTop(stateCode) {
    return stateCode[0];
}

export function getFront(stateCode) {
    return stateCode[1];
}

export function getRight(stateCode) {
    return opposite[getLeft(stateCode)];
}

export function getLeft(stateCode) {
    return left[stateCode];
}

export function getDown(stateCode) {
    return opposite[stateCode[0]];
}

export function getBack(stateCode) {
    return opposite[stateCode[1]];
}

export function cloneObject(obj) {
    return Object.assign({}, obj);
}

function NextState() {

    const S = [];
    S.push('tf');
    S.push('tr');
    S.push('tb');
    S.push('tl');

    S.push('ft');
    S.push('fl');
    S.push('fd');
    S.push('fr');

    S.push('rt');
    S.push('rf');
    S.push('rd');
    S.push('rb');

    S.push('df');
    S.push('dl');
    S.push('db');
    S.push('dr');

    S.push('bt');
    S.push('br');
    S.push('bd');
    S.push('bl');

    S.push('lt');
    S.push('lb');
    S.push('ld');
    S.push('lf');

    this.first = 'tf';
    this.last = 'lf';

    this.stateCount = S.length;

    this.get = function(state) {
        let index = S.indexOf(state);
        if (index >= 0) {
            if (index === S.length - 1) {
                return { state: S[0], index: 0 };
            }
            return {
                state: S[index + 1],
                index: index + 1
            };
        }
        return undefined;
    }
}
const nextState = new NextState();
export { nextState };