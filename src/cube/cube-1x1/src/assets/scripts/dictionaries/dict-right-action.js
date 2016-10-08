import { STATES as S } from '../constants';

const dict = [];
dict['r^'] = [];
dict['r>'] = [];
dict['rv'] = [];
dict['r<'] = [];

let state = S.tf;
let act = 'r^';
dict[act][S.tf] = { state: '', ui: '' };
dict[act][S.tr] = { state: '', ui: '' };


act = 'r>';
dict[act][S.tf] = { state: '', ui: '' };


act = 'r<';
dict[act][S.tf] = { state: '', ui: '' };


act = 'rv';
dict[act][S.tf] = { state: '', ui: '' };


export { dict as dictRightAction };