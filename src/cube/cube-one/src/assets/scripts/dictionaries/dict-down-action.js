import { STATES as S } from '../constants';
import deepFreeze from 'deep-freeze';


const dict = [];
dict['d^'] = [];
dict['d>'] = [];
dict['dv'] = [];
dict['d<'] = [];

let state = S.tf;
let act = 'd^';
dict[act][S.tf] = { state: '', ui: '' };
dict[act][S.tr] = { state: '', ui: '' };


act = 'd>';
dict[act][S.tf] = { state: '', ui: '' };


act = 'd<';
dict[act][S.tf] = { state: '', ui: '' };


act = 'dv';
dict[act][S.tf] = { state: '', ui: '' };

deepFreeze(dict);
export { dict as dictDownAction };