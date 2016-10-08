import { STATES as S } from '../constants';

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
dict[act][S.tf] = { state: '', ui: '' };


act = 'b<';
dict[act][S.tf] = { state: '', ui: '' };


act = 'bv';
dict[act][S.tf] = { state: '', ui: '' };


export { dict as dictBackAction };