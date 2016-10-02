import { ACTION } from './constants';

const dictUi = [];
ui['t^'] = 'x';
ui['t>'] = 'z';
ui['tv'] = '-x';
ui['t<'] = '-z';

ui['f^'] = 'x';
ui['f>'] = 'y';
ui['fv'] = '-x';
ui['f<'] = '-y';

ui['r^'] = '-z';
ui['r>'] = 'y';
ui['rv'] = 'z';
ui['r<'] = '-y';

ui['l^'] = 'z';
ui['l>'] = 'y';
ui['lv'] = '-z';
ui['l<'] = '-y';

ui['b^'] = 'x';
ui['b>'] = 'y';
ui['bv'] = '-x';
ui['b<'] = '-y';

ui['d^'] = 'x';
ui['d>'] = '-z';
ui['dv'] = '-x';
ui['d<'] = 'z';

const ui = dictUi;


const dictDegree = [];
dictDegree['x'] = 'rotateX(90deg)';
dictDegree['-x'] = 'rotateX(-90deg)';
dictDegree['y'] = 'rotateY(90deg)';
dictDegree['-y'] = 'rotateY(-90deg)';
dictDegree['z'] = 'rotateZ(90deg)';
dictDegree['-z'] = 'rotateZ(-90deg)';

const dictActionTypes = [];
dictActionTypes[ACTION.swipeup] = '^';
dictActionTypes[ACTION.swiperight] = '>';
dictActionTypes[ACTION.swipedown] = 'v';
dictActionTypes[ACTION.swipeleft] = '<';

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



let state = 'tf';

const dictState = [];
dictState[state] = [];
dictState[state]['x'] = 'fd';
dictState[state]['-x'] = 'bt';
dictState[state]['y'] = 'tl';
dictState[state]['-y'] = 'tr';
dictState[state]['z'] = 'lf';
dictState[state]['-z'] = 'rf';

let act = '';
dictTable[state][act = 't^'] = { state: dictState[state]['x'], ui: 'x' };
dictTable[state][act = 't>'] = { state: dictState[state]['z'], ui: 'z' };
dictTable[state][act = 'tv'] = { state: dictState[state]['-x'], ui: '-x' };
dictTable[state][act = 't<'] = { state: dictState[state]['-z'], ui: '-z' };

dictTable[state][act = 'f^'] = { state: dictState[state]['x'], ui: 'x' };
dictTable[state][act = 'f>'] = { state: dictState[state]['y'], ui: 'y' };
dictTable[state][act = 'fv'] = { state: dictState[state]['-x'], ui: '-x' };
dictTable[state][act = 'f<'] = { state: dictState[state]['-y'], ui: '-y' };

dictTable[state][act = 'r^'] = { state: dictState[state]['-z'], ui: '-z' };
dictTable[state][act = 'r>'] = { state: dictState[state]['y'], ui: 'y' };
dictTable[state][act = 'rv'] = { state: dictState[state]['z'], ui: 'z' };
dictTable[state][act = 'r<'] = { state: dictState[state]['-y'], ui: '-y' };

dictTable[state][act = 'l^'] = { state: dictState[state]['z'], ui: 'z' };
dictTable[state][act = 'l>'] = { state: dictState[state]['y'], ui: 'y' };
dictTable[state][act = 'lv'] = { state: dictState[state]['-z'], ui: '-z' };
dictTable[state][act = 'l<'] = { state: dictState[state]['-y'], ui: '-y' };

dictTable[state][act = 'b^'] = { state: dictState[state]['x'], ui: 'x' };
dictTable[state][act = 'b>'] = { state: dictState[state]['y'], ui: 'y' };
dictTable[state][act = 'bv'] = { state: dictState[state]['-x'], ui: '-x' };
dictTable[state][act = 'b<'] = { state: dictState[state]['-y'], ui: '-y' };

dictTable[state][act = 'd^'] = { state: dictState[state]['x'], ui: 'x' };
dictTable[state][act = 'd>'] = { state: dictState[state]['-z'], ui: '-z' };
dictTable[state][act = 'dv'] = { state: dictState[state]['-x'], ui: '-x' };
dictTable[state][act = 'd<'] = { state: dictState[state]['z'], ui: 'z' };


state = 'tr';

dictState[state] = [];
dictState[state]['x'] = 'rd';
dictState[state]['-x'] = 'lt';
dictState[state]['y'] = 'tf';
dictState[state]['-y'] = 'tb';
dictState[state]['z'] = 'fr';
dictState[state]['-z'] = 'br';

dictTable[state]['t^'] = { state: dictState[state]['x'], ui: 'x' };
dictTable[state]['t>'] = { state: dictState[state]['z'], ui: 'z' };
dictTable[state]['tv'] = { state: dictState[state]['-x'], ui: '-x' };
dictTable[state]['t<'] = { state: dictState[state]['-z'], ui: '-z' };

dictTable[state]['f^'] = { state: dictState[state]['x'], ui: 'x' };
dictTable[state]['f>'] = { state: dictState[state]['y'], ui: 'y' };
dictTable[state]['fv'] = { state: dictState[state]['-x'], ui: '-x' };
dictTable[state]['f<'] = { state: dictState[state]['-y'], ui: '-y' };

dictTable[state]['r^'] = { state: dictState[state]['-z'], ui: '-z' };
dictTable[state]['r>'] = { state: dictState[state]['y'], ui: 'y' };
dictTable[state]['rv'] = { state: dictState[state]['z'], ui: 'z' };
dictTable[state]['r<'] = { state: dictState[state]['-y'], ui: '-y' };

dictTable[state]['l^'] = { state: dictState[state]['z'], ui: 'z' };
dictTable[state]['l>'] = { state: dictState[state]['y'], ui: 'y' };
dictTable[state]['lv'] = { state: dictState[state]['-z'], ui: '-z' };
dictTable[state]['l<'] = { state: dictState[state]['-y'], ui: '-y' };

dictTable[state]['b^'] = { state: dictState[state]['x'], ui: 'x' };
dictTable[state]['b>'] = { state: dictState[state]['y'], ui: 'y' };
dictTable[state]['bv'] = { state: dictState[state]['-x'], ui: '-x' };
dictTable[state]['b<'] = { state: dictState[state]['-y'], ui: '-y' };

dictTable[state]['d^'] = { state: dictState[state]['x'], ui: 'x' };
dictTable[state]['d>'] = { state: dictState[state]['-z'], ui: '-z' };
dictTable[state]['dv'] = { state: dictState[state]['-x'], ui: '-x' };
dictTable[state]['d<'] = { state: dictState[state]['z'], ui: 'z' };


state = 'tl';

dictState[state] = [];
dictState[state]['x'] = 'ld';
dictState[state]['-x'] = 'rt';
dictState[state]['y'] = 'tb';
dictState[state]['-y'] = 'tf';
dictState[state]['z'] = 'bl';
dictState[state]['-z'] = 'fl';



dictTable[state]['t^'] = { state: dictState[state]['x'], ui: 'x' };
dictTable[state]['t>'] = { state: dictState[state]['z'], ui: 'z' };
dictTable[state]['tv'] = { state: dictState[state]['-x'], ui: '-x' };
dictTable[state]['t<'] = { state: dictState[state]['-z'], ui: '-z' };

dictTable[state]['f^'] = { state: dictState[state]['x'], ui: 'x' };
dictTable[state]['f>'] = { state: dictState[state]['y'], ui: 'y' };
dictTable[state]['fv'] = { state: dictState[state]['-x'], ui: '-x' };
dictTable[state]['f<'] = { state: dictState[state]['-y'], ui: '-y' };

dictTable[state]['r^'] = { state: dictState[state]['-z'], ui: '-z' };
dictTable[state]['r>'] = { state: dictState[state]['y'], ui: 'y' };
dictTable[state]['rv'] = { state: dictState[state]['z'], ui: 'z' };
dictTable[state]['r<'] = { state: dictState[state]['-y'], ui: '-y' };

dictTable[state]['l^'] = { state: dictState[state]['z'], ui: 'z' };
dictTable[state]['l>'] = { state: dictState[state]['y'], ui: 'y' };
dictTable[state]['lv'] = { state: dictState[state]['-z'], ui: '-z' };
dictTable[state]['l<'] = { state: dictState[state]['-y'], ui: '-y' };

dictTable[state]['b^'] = { state: dictState[state]['x'], ui: 'x' };
dictTable[state]['b>'] = { state: dictState[state]['y'], ui: 'y' };
dictTable[state]['bv'] = { state: dictState[state]['-x'], ui: '-x' };
dictTable[state]['b<'] = { state: dictState[state]['-y'], ui: '-y' };

dictTable[state]['d^'] = { state: dictState[state]['x'], ui: 'x' };
dictTable[state]['d>'] = { state: dictState[state]['-z'], ui: '-z' };
dictTable[state]['dv'] = { state: dictState[state]['-x'], ui: '-x' };
dictTable[state]['d<'] = { state: dictState[state]['z'], ui: 'z' };



export { dictUi };

export { dictDegree };

export { dictState };

export { dictTable };

export {dictActionTypes};