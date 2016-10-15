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
};
deepFreeze(STATES);



const opposite = [];
opposite['t'] = 'd';
opposite['d'] = 't';
opposite['r'] = 'l';
opposite['l'] = 'r';
opposite['f'] = 'b';
opposite['b'] = 'f';

const left = [];
left['tf'] = 'l';
left['tr'] = 'f';
left['tb'] = 'r';
left['tl'] = 'b';

left['ft'] = 'r';
left['fl'] = 't';
left['fd'] = 'l';
left['fr'] = 'd';

left['rt'] = 'b';
left['rf'] = 't';
left['rd'] = 'f';
left['rb'] = 'd';

left['df'] = 'r';
left['dl'] = 'f';
left['db'] = 'l';
left['dr'] = 'b';

left['bt'] = 'l';
left['br'] = 't';
left['bd'] = 'r';
left['bl'] = 'd';

left['lt'] = 'f';
left['lb'] = 't';
left['ld'] = 'b';
left['lf'] = 'd';


export { CUBE, ACTION, STATES, opposite, left };