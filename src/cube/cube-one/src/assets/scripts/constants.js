import deepFreeze from 'deep-freeze';


const CUBE = {
    TOP: 'top',
    FRONT: 'front',
    RIGHT: 'right',
    BACK: 'back',
    LEFT: 'left',
    DOWN: 'down',
};
deepFreeze(CUBE);


const ACTION = {
    swipeleft: 'swipeleft',
    swiperight: 'swiperight',
    swipeup: 'swipeup',
    swipedown: 'swipedown',
};
deepFreeze(ACTION);


const STATES = {
    uf: 'uf',
    ur: 'ur',
    ub: 'ub',
    ul: 'ul',
    fu: 'fu',
    fl: 'fl',
    fd: 'fd',
    fr: 'fr',
    ru: 'ru',
    rf: 'rf',
    rd: 'rd',
    rb: 'rb',
    df: 'df',
    dl: 'dl',
    db: 'db',
    dr: 'dr',
    bu: 'bu',
    br: 'br',
    bd: 'bd',
    bl: 'bl',
    lu: 'lu',
    lb: 'lb',
    ld: 'ld',
    lf: 'lf',
};
deepFreeze(STATES);



const opposite = [];
opposite['u'] = 'd';
opposite['d'] = 'u';
opposite['r'] = 'l';
opposite['l'] = 'r';
opposite['f'] = 'b';
opposite['b'] = 'f';

const left = [];
left['uf'] = 'l';
left['ur'] = 'f';
left['ub'] = 'r';
left['ul'] = 'b';

left['fu'] = 'r';
left['fl'] = 't';
left['fd'] = 'l';
left['fr'] = 'd';

left['ru'] = 'b';
left['rf'] = 'u';
left['rd'] = 'f';
left['rb'] = 'd';

left['df'] = 'r';
left['dl'] = 'f';
left['db'] = 'l';
left['dr'] = 'b';

left['bu'] = 'l';
left['br'] = 'u';
left['bd'] = 'r';
left['bl'] = 'd';

left['lu'] = 'f';
left['lb'] = 'u';
left['ld'] = 'b';
left['lf'] = 'd';


export { STATES, opposite, left };