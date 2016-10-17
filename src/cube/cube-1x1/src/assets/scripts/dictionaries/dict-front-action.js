import { STATES as S } from '../constants';
import deepFreeze from 'deep-freeze';


let dict = [];
dict['f^'] = [];
dict['f>'] = [];
dict['fv'] = [];
dict['f<'] = [];

let state = S.tf;
let act = 'f^';
dict[act][S.tf] = { state: S.fd, ui: 'x' };
dict[act][S.tr] = { state: S.rd, ui: '-z' };
dict[act][S.tb] = { state: S.bd, ui: '-x' };
dict[act][S.tl] = { state: S.ld, ui: 'z' };

dict[act][S.ft] = { state: S.tb, ui: '-x' };
dict[act][S.fl] = { state: S.lb, ui: 'y' };
dict[act][S.fd] = { state: S.db, ui: 'x' };
dict[act][S.fr] = { state: S.rb, ui: '-y' };


act = 'f>';
dict[act][S.tf] = { state: S.tl, ui: 'y' };
dict[act][S.tl] = { state: S.tb, ui: 'y' };
dict[act][S.tb] = { state: S.tr, ui: 'y' };
dict[act][S.tl] = { state: S.tf, ui: 'y' };


act = 'f<';
dict[act][S.tf] = { state: S.tr, ui: '-y' };
dict[act][S.tr] = { state: S.tb, ui: '-y' };
dict[act][S.tb] = { state: S.tl, ui: '-y' };
dict[act][S.tl] = { state: S.tf, ui: '-y' };




act = 'fv';
dict[act][S.tf] = { state: 'bt', ui: '-x' };


deepFreeze(dict);
export { dict as dictFrontAction };