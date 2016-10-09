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
dict[act][S.tf] = { state: S.tl, ui: 'y' };
dict[act][S.tl] = { state: S.tb, ui: 'y' };
dict[act][S.tb] = { state: S.tr, ui: 'y' };
dict[act][S.tr] = { state: S.tf, ui: 'y' };

act = 'l<';
dict[act][S.tf] = { state: S.tr, ui: '-y' };
dict[act][S.tr] = { state: S.tb, ui: '-y' };
dict[act][S.tb] = { state: S.tl, ui: '-y' };
dict[act][S.tl] = { state: S.tf, ui: '-y' };

act = 'lv';
dict[act][S.tf] = { state: '', ui: '' };


export { dict as dictLeftAction };