import { STATES as S } from '../constants';

const dict = [];
dict['f^'] = [];
dict['f>'] = [];
dict['fv'] = [];
dict['f<'] = [];

let state = S.tf;
let act = 'f^';
dict[act][S.tf] = { state: 'fd', ui: 'x' };
dict[act][S.tr] = { state: 'rd', ui: '-z' };


act = 'f>';
dict[act][S.tf] = { state: 'tl', ui: 'y' };


act = 'f<';
dict[act][S.tf] = { state: 'tr', ui: '-y' };


act = 'fv';
dict[act][S.tf] = { state: 'bt', ui: '-x' };



export { dict as dictFrontAction };