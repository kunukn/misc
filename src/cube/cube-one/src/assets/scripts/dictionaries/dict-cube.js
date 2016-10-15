import { STATES as S } from '../constants';
import deepFreeze from 'deep-freeze';

const d = [];

Object.keys(S).forEach(i => d[i] = []);

/*
    tf: 'tf',
    tr: 'tr',
    tb: 'tb',
    tl: 'tl',
    ft: 'ft',
    fl: 'fl',
    fd: 'fd',
    fr: 'fr',
    rt: 'rt',
    rf: 'rf',
    rd: 'rd',
    rb: 'rb',
    df: 'df',
    dl: 'dl',
    db: 'db',
    dr: 'dr',
    bt: 'bt',
    br: 'br',
    bd: 'bd',
    bl: 'bl',
    lt: 'lt',
    lb: 'lb',
    ld: 'ld',
    lf: 'lf',
*/ 

let s = 'tf';
d[s]['x'] = 'fd';
d[s]['-x'] = 'bt';
d[s]['y'] = 'tl';
d[s]['-y'] = 'tr';
d[s]['z'] = 'rf';
d[s]['-z'] = 'lf';

s = 'tr';
d[S.tf]['x'] = '';
d[S.tf]['-x'] = '';
d[S.tf]['y'] = '';
d[S.tf]['-y'] = '';
d[S.tf]['z'] = '';
d[S.tf]['-z'] = '';


deepFreeze(d);
export { d as dictCube };