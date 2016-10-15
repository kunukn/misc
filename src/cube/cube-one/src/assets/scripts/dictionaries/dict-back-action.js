import { STATES as S } from '../constants';
import deepFreeze from 'deep-freeze';

const dict = [];
dict['b^'] = [];
dict['b>'] = [];
dict['bv'] = [];
dict['b<'] = [];

let state = S.tf;
let act = 'b^';
dict[act][S.tf] = { state: '', ui: '' };
dict[act][S.tr] = { state: '', ui: '' };


act = 'b>';
dict[act][S.tf] = { state: S.tl, ui: 'y' };
dict[act][S.tl] = { state: S.tb, ui: 'y' };
dict[act][S.tb] = { state: S.tr, ui: 'y' };
dict[act][S.tr] = { state: S.tf, ui: 'y' };

act = 'b<';
dict[act][S.tf] = { state: S.tr, ui: '-y' };
dict[act][S.tr] = { state: S.tb, ui: '-y' };
dict[act][S.tb] = { state: S.tl, ui: '-y' };
dict[act][S.tl] = { state: S.tf, ui: '-y' };

act = 'bv';
dict[act][S.tf] = { state: '', ui: '' };

deepFreeze(dict);
export { dict as dictBackAction };