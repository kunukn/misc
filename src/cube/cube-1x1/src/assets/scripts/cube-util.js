import { opposite, left } from './constants';

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
            state.transforms[lastIndex].val += transformKeyVal.val;
            pushTransform = false;
        }
    }
    if (pushTransform) {
        state.transforms.push(transformKeyVal);
    }

    return state;
}