import { dictUi } from './dictionary';
const ui = dictUi;

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



state = 'rt';

dictState[state] = [];
dictState[state]['x'] = 'tl';
dictState[state]['-x'] = 'dr';
dictState[state]['y'] = 'rb';
dictState[state]['-y'] = 'rf';
dictState[state]['z'] = 'bt';
dictState[state]['-z'] = 'ft';

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


state = 'rf';

dictState[state] = [];
dictState[state]['x'] = 'fl';
dictState[state]['-x'] = 'br';
dictState[state]['y'] = 'rt';
dictState[state]['-y'] = 'rd';
dictState[state]['z'] = 'tf';
dictState[state]['-z'] = 'df';

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


state = 'rd';

dictState[state] = [];
dictState[state]['x'] = 'dl';
dictState[state]['-x'] = 'tr';
dictState[state]['y'] = 'rf';
dictState[state]['-y'] = 'rb';
dictState[state]['z'] = 'fd';
dictState[state]['-z'] = 'bd';

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


state = 'rb';

dictState[state] = [];
dictState[state]['x'] = 'bl';
dictState[state]['-x'] = 'fr';
dictState[state]['y'] = 'rd';
dictState[state]['-y'] = 'rt';
dictState[state]['z'] = 'db';
dictState[state]['-z'] = 'tb';

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




export { dictTable };
export { dictState };