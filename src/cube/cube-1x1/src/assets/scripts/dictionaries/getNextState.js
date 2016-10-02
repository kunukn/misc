import { dictUi } from './dictionary';
const ui = dictUi;

let state,
    act,
    dir;

const dictState = [];

state = 'tf';
dictState[state] = [];
dictState[state]['x'] = 'fd';
dictState[state]['-x'] = 'bt';
dictState[state]['y'] = 'tl';
dictState[state]['-y'] = 'tr';
dictState[state]['z'] = 'lf';
dictState[state]['-z'] = 'rf';


state = 'tr';
dictState[state] = [];
dictState[state]['x'] = 'rd';
dictState[state]['-x'] = 'lt';
dictState[state]['y'] = 'tf';
dictState[state]['-y'] = 'tb';
dictState[state]['z'] = 'fr';
dictState[state]['-z'] = 'br';

state = 'tl';
dictState[state] = [];
dictState[state]['x'] = 'ld';
dictState[state]['-x'] = 'rt';
dictState[state]['y'] = 'tb';
dictState[state]['-y'] = 'tf';
dictState[state]['z'] = 'bl';
dictState[state]['-z'] = 'fl';

state = 'tb';
dictState[state] = [];
dictState[state]['x'] = 'bd';
dictState[state]['-x'] = 'ft';
dictState[state]['y'] = 'tr';
dictState[state]['-y'] = 'tl';
dictState[state]['z'] = 'rb';
dictState[state]['-z'] = 'lb';

state = 'ft';
dictState[state] = [];
dictState[state]['x'] = 'tb';
dictState[state]['-x'] = 'df';
dictState[state]['y'] = 'fr';
dictState[state]['-y'] = 'fl';
dictState[state]['z'] = 'rt';
dictState[state]['-z'] = 'lt';

state = 'fl';
dictState[state] = [];
dictState[state]['x'] = 'lb';
dictState[state]['-x'] = 'rf';
dictState[state]['y'] = 'ft';
dictState[state]['-y'] = 'fd';
dictState[state]['z'] = 'tl';
dictState[state]['-z'] = 'dl';


state = 'fd';
dictState[state] = [];
dictState[state]['x'] = 'db';
dictState[state]['-x'] = 'tf';
dictState[state]['y'] = 'fl';
dictState[state]['-y'] = 'fr';
dictState[state]['z'] = 'ld';
dictState[state]['-z'] = 'rd';

state = 'fr';
dictState[state] = [];
dictState[state]['x'] = 'rb';
dictState[state]['-x'] = 'lf';
dictState[state]['y'] = 'fd';
dictState[state]['-y'] = 'ft';
dictState[state]['z'] = 'dr';
dictState[state]['-z'] = 'tr';


state = 'rt';
dictState[state] = [];
dictState[state]['x'] = 'tl';
dictState[state]['-x'] = 'dr';
dictState[state]['y'] = 'rb';
dictState[state]['-y'] = 'rf';
dictState[state]['z'] = 'bt';
dictState[state]['-z'] = 'ft';

state = 'rf';
dictState[state] = [];
dictState[state]['x'] = 'fl';
dictState[state]['-x'] = 'br';
dictState[state]['y'] = 'rt';
dictState[state]['-y'] = 'rd';
dictState[state]['z'] = 'tf';
dictState[state]['-z'] = 'df';

state = 'rd';
dictState[state] = [];
dictState[state]['x'] = 'dl';
dictState[state]['-x'] = 'tr';
dictState[state]['y'] = 'rf';
dictState[state]['-y'] = 'rb';
dictState[state]['z'] = 'fd';
dictState[state]['-z'] = 'bd';


state = 'rb';
dictState[state] = [];
dictState[state]['x'] = 'bl';
dictState[state]['-x'] = 'fr';
dictState[state]['y'] = 'rd';
dictState[state]['-y'] = 'rt';
dictState[state]['z'] = 'db';
dictState[state]['-z'] = 'tb';


function getNextState(state, action) {
    let direction = dictUi[action];
    return { state: dictState[state][direction], ui: direction };
}

export { getNextState };