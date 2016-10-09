import { STATES as S } from '../constants';

const dict = [];
dict['r^'] = [];
dict['r>'] = [];
dict['rv'] = [];
dict['r<'] = [];

let state = S.tf;
let act = 'r^';
dict[act][S.tf] = { state: S.rf, ui: '-z' };
dict[act][S.tr] = { state: '', ui: '' };
dict[act][S.tb] = { state: '', ui: '' };
dict[act][S.tl] = { state: '', ui: '' };

dict[act][S.rt] = { state: '', ui: '' };
dict[act][S.rf] = { state: S.lf, ui: 'y' };
dict[act][S.rd] = { state: '', ui: '' };
dict[act][S.rb] = { state: '', ui: '' };


act = 'r>';
dict[act][S.tf] = { state: S.tl, ui: 'y' };
dict[act][S.tl] = { state: S.tb, ui: 'y' };
dict[act][S.tb] = { state: S.tr, ui: 'y' };
dict[act][S.tr] = { state: S.tf, ui: 'y' };

act = 'r<';
dict[act][S.tf] = { state: S.tr, ui: '-y' };
dict[act][S.tr] = { state: S.tb, ui: '-y' };
dict[act][S.tb] = { state: S.tl, ui: '-y' };
dict[act][S.tl] = { state: S.tf, ui: '-y' };

act = 'rv';
dict[act][S.tf] = { state: S.lf, ui: 'z' };


export { dict as dictRightAction };