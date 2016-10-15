import { opposite, left } from './constants';
import { log } from './logger';

export function getLeft(stateCode) {
    const l = left[stateCode];
    if (!l || l.length !== 1) throw new Error('getLeft - ' + l);

    return l;
}

export function getRight(stateCode) {
    return opposite[getLeft(stateCode)];
}

export function cloneObject(obj) {
    return Object.assign({}, obj);
}

export function transformsApply(transformKeyVal, state) {

    let pushTransform = true;
    if (state.transforms.length) {
        let lastIndex = state.transforms.length - 1;
        if (state.transforms[lastIndex].key === transformKeyVal.key) {
            let sum = state.transforms[lastIndex].val + transformKeyVal.val;
            state.transforms[lastIndex].val = sum;
            pushTransform = false;
        }
    }
    if (pushTransform) {
        state.transforms.push(transformKeyVal);
    }

    return state;
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

    this.stateCount = S.length;

    this.get = function(state) {
        let index = S.indexOf(state);
        if (index >= 0) {
            if (index === S.length - 1) {
                return S[0];
            }
            return S[index + 1];
        }
        return undefined;
    }

    this.isFirst = function(state) {
        let index = S.indexOf(state);
        return index === 0;
    }

    this.isLast = function(state) {
        let index = S.indexOf(state);
        return index === S.length - 1;
    }
}
const nextState = new NextState();
export { nextState };