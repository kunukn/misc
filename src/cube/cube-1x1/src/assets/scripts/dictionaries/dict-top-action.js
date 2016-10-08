import { STATES as S } from '../constants';

const dict = [];
dict['t^'] = [];
dict['t>'] = [];
dict['tv'] = [];
dict['t<'] = [];

let state = S.tf;
let act = 't^';
dict[act][S.tf] = { state: '', ui: '' };
dict[act][S.tr] = { state: '', ui: '' };


act = 't>';
dict[act][S.tf] = { state: '', ui: '' };


act = 't<';
dict[act][S.tf] = { state: '', ui: '' };


act = 'tv';
dict[act][S.tf] = { state: '', ui: '' };


export { dict as dictTopAction };