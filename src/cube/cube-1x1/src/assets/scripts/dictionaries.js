import { ACTION } from './constants';

const dictUi = [];
dictUi['t^'] = 'x';
dictUi['t>'] = 'z';
dictUi['tv'] = '-x';
dictUi['t<'] = '-z';

dictUi['f^'] = 'x';
dictUi['f>'] = 'y';
dictUi['fv'] = '-x';
dictUi['f<'] = '-y';

dictUi['r^'] = '-z';
dictUi['r>'] = 'y';
dictUi['rv'] = 'z';
dictUi['r<'] = '-y';

dictUi['l^'] = 'z';
dictUi['l>'] = 'y';
dictUi['lv'] = '-z';
dictUi['l<'] = '-y';

dictUi['b^'] = 'x';
dictUi['b>'] = 'y';
dictUi['bv'] = '-x';
dictUi['b<'] = '-y';

dictUi['d^'] = 'x';
dictUi['d>'] = '-z';
dictUi['dv'] = '-x';
dictUi['d<'] = 'z';

const ui = dictUi;

const dictDegree = [];
dictDegree['x'] = 'rotateX(90deg)';
dictDegree['-x'] = 'rotateX(-90deg)';
dictDegree['y'] = 'rotateY(90deg)';
dictDegree['-y'] = 'rotateY(-90deg)';
dictDegree['z'] = 'rotateZ(90deg)';
dictDegree['-z'] = 'rotateZ(-90deg)';
dictDegree['2x'] = 'rotateX(180deg)';
dictDegree['-2x'] = 'rotateX(-180deg)';
dictDegree['2y'] = 'rotateY(180deg)';
dictDegree['-2y'] = 'rotateY(-180deg)';
dictDegree['2z'] = 'rotateZ(180deg)';
dictDegree['-2z'] = 'rotateZ(-180deg)';

const dictActionTypes = [];
dictActionTypes[ACTION.swipeup] = '^';
dictActionTypes[ACTION.swiperight] = '>';
dictActionTypes[ACTION.swipedown] = 'v';
dictActionTypes[ACTION.swipeleft] = '<';


const dictRotate = [];

dictRotate['tf'] = [];
dictRotate['tr'] = ['y'];
dictRotate['tl'] = ['-y'];
dictRotate['tb'] = ['2y'];

dictRotate['fd'] = ['x'];
dictRotate['fr'] = ['x', '-y'];
dictRotate['ft'] = ['x', '2y'];
dictRotate['fl'] = ['x', 'y'];

dictRotate['rd'] = ['-z', '-y'];
dictRotate['rb'] = ['-z', '2y'];
dictRotate['rt'] = ['-z', 'y'];
dictRotate['rf'] = ['-z'];

dictRotate['db'] = ['2x'];
dictRotate['dr'] = ['2x', 'y'];
dictRotate['df'] = ['2x', '2y'];
dictRotate['dl'] = ['2x', '-y'];

dictRotate['bd'] = ['-x', '2y'];
dictRotate['bl'] = ['-x', 'y'];
dictRotate['bt'] = ['-x'];
dictRotate['br'] = ['-x', '-y'];

dictRotate['ld'] = ['z', 'y'];
dictRotate['lf'] = ['z'];
dictRotate['lt'] = ['z', '-y'];
dictRotate['lb'] = ['z', '2y'];

const dictTable = [];

dictTable['tf'] = [];
dictTable['tr'] = [];
dictTable['tl'] = [];
dictTable['tb'] = [];

dictTable['fd'] = [];
dictTable['fr'] = [];
dictTable['ft'] = [];
dictTable['fl'] = [];

dictTable['rd'] = [];
dictTable['rb'] = [];
dictTable['rt'] = [];
dictTable['rf'] = [];

dictTable['db'] = [];
dictTable['dr'] = [];
dictTable['df'] = [];
dictTable['dl'] = [];

dictTable['bd'] = [];
dictTable['bl'] = [];
dictTable['bt'] = [];
dictTable['br'] = [];

dictTable['ld'] = [];
dictTable['lf'] = [];
dictTable['lt'] = [];
dictTable['lb'] = [];




let state = 'tf',
    act = '',
    dir = '';

const dictState = [];
dictState[state] = [];
dictState[state]['x'] = 'fd';
dictState[state]['-x'] = 'bt';
dictState[state]['y'] = 'tl';
dictState[state]['-y'] = 'tr';
dictState[state]['z'] = 'lf';
dictState[state]['-z'] = 'rf';

dictTable[state][act = 't^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'tv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'f^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'fv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'r^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'rv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'l^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'lv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'b^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'bv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'd^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'dv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd<'] = { state: dictState[state][dir = ui[act]], ui: dir };


state = 'tr';

dictState[state] = [];
dictState[state]['x'] = 'rd';
dictState[state]['-x'] = 'lt';
dictState[state]['y'] = 'tf';
dictState[state]['-y'] = 'tb';
dictState[state]['z'] = 'fr';
dictState[state]['-z'] = 'br';

dictTable[state][act = 't^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'tv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'f^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'fv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'r^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'rv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'l^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'lv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'b^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'bv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'd^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'dv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd<'] = { state: dictState[state][dir = ui[act]], ui: dir };


state = 'tl';

dictState[state] = [];
dictState[state]['x'] = 'ld';
dictState[state]['-x'] = 'rt';
dictState[state]['y'] = 'tb';
dictState[state]['-y'] = 'tf';
dictState[state]['z'] = 'bl';
dictState[state]['-z'] = 'fl';

dictTable[state][act = 't^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'tv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'f^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'fv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'r^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'rv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'l^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'lv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'b^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'bv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'd^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'dv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd<'] = { state: dictState[state][dir = ui[act]], ui: dir };

state = 'tb';

dictState[state] = [];
dictState[state]['x'] = 'bd';
dictState[state]['-x'] = 'ft';
dictState[state]['y'] = 'tr';
dictState[state]['-y'] = 'tl';
dictState[state]['z'] = 'rb';
dictState[state]['-z'] = 'lb';

dictTable[state][act = 't^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'tv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'f^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'fv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'r^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'rv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'l^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'lv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'b^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'bv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'd^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'dv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd<'] = { state: dictState[state][dir = ui[act]], ui: dir };


state = 'ft';

dictState[state] = [];
dictState[state]['x'] = 'tb';
dictState[state]['-x'] = 'df';
dictState[state]['y'] = 'fr';
dictState[state]['-y'] = 'fl';
dictState[state]['z'] = 'rt';
dictState[state]['-z'] = 'lt';

dictTable[state][act = 't^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'tv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'f^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'fv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'r^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'rv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'l^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'lv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'b^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'bv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'd^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'dv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd<'] = { state: dictState[state][dir = ui[act]], ui: dir };



state = 'fl';

dictState[state] = [];
dictState[state]['x'] = 'lb';
dictState[state]['-x'] = 'rf';
dictState[state]['y'] = 'ft';
dictState[state]['-y'] = 'fd';
dictState[state]['z'] = 'tl';
dictState[state]['-z'] = 'dl';

dictTable[state][act = 't^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'tv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'f^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'fv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'r^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'rv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'l^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'lv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'b^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'bv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'd^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'dv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd<'] = { state: dictState[state][dir = ui[act]], ui: dir };



state = 'fd';

dictState[state] = [];
dictState[state]['x'] = 'db';
dictState[state]['-x'] = 'tf';
dictState[state]['y'] = 'fl';
dictState[state]['-y'] = 'fr';
dictState[state]['z'] = 'ld';
dictState[state]['-z'] = 'rd';

dictTable[state][act = 't^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'tv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'f^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'fv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'r^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'rv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'l^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'lv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'b^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'bv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'd^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'dv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd<'] = { state: dictState[state][dir = ui[act]], ui: dir };


state = 'fr';

dictState[state] = [];
dictState[state]['x'] = 'rb';
dictState[state]['-x'] = 'lf';
dictState[state]['y'] = 'fd';
dictState[state]['-y'] = 'ft';
dictState[state]['z'] = 'dr';
dictState[state]['-z'] = 'tr';

dictTable[state][act = 't^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'tv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 't<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'f^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'fv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'f<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'r^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'rv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'r<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'l^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'lv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'l<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'b^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'bv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'b<'] = { state: dictState[state][dir = ui[act]], ui: dir };

dictTable[state][act = 'd^'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd>'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'dv'] = { state: dictState[state][dir = ui[act]], ui: dir };
dictTable[state][act = 'd<'] = { state: dictState[state][dir = ui[act]], ui: dir };




export { dictUi };
export { dictDegree };
export { dictState };
export { dictTable };
export { dictActionTypes };
export { dictRotate };