import { STATES as S } from '../constants';

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
dict[act][S.tf] = { state: 'tl', ui: 'y' };


act = 'f<';
dict[act][S.tf] = { state: 'tr', ui: '-y' };


act = 'fv';
dict[act][S.tf] = { state: 'bt', ui: '-x' };



export { dict as dictFrontAction };