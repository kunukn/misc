import { STATES as S } from '../constants';

const dict = [];
dict['l^'] = [];
dict['l>'] = [];
dict['lv'] = [];
dict['l<'] = [];

let state = S.tf;
let act = 'l^';
dict[act][S.tf] = { state: '', ui: '' };
dict[act][S.tr] = { state: '', ui: '' };


act = 'l>';
dict[act][S.tf] = { state: '', ui: '' };


act = 'l<';
dict[act][S.tf] = { state: '', ui: '' };


act = 'lv';
dict[act][S.tf] = { state: '', ui: '' };


export { dict as dictLeftAction };