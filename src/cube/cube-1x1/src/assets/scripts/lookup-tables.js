const degreeLookup = [];
degreeLookup['x'] = 'rotateX(90deg)';
degreeLookup['-x'] = 'rotateX(-90deg)';
degreeLookup['y'] = 'rotateY(90deg)';
degreeLookup['-y'] = 'rotateY(-90deg)';
degreeLookup['z'] = 'rotateZ(90deg)';
degreeLookup['-z'] = 'rotateZ(-90deg)';


const lookupTable = [];

lookupTable['tf'] = [];
lookupTable['tr'] = [];
lookupTable['tl'] = [];
lookupTable['tb'] = [];

lookupTable['fd'] = [];
lookupTable['fr'] = [];
lookupTable['ft'] = [];
lookupTable['fl'] = [];

lookupTable['rd'] = [];
lookupTable['rb'] = [];
lookupTable['rt'] = [];
lookupTable['rf'] = [];

lookupTable['db'] = [];
lookupTable['dr'] = [];
lookupTable['df'] = [];
lookupTable['dl'] = [];

lookupTable['bd'] = [];
lookupTable['bl'] = [];
lookupTable['bt'] = [];
lookupTable['br'] = [];

lookupTable['ld'] = [];
lookupTable['lf'] = [];
lookupTable['lt'] = [];
lookupTable['lb'] = [];

export { degreeLookup };

lookupTable['tf']['t^'] = { state: 'fd', ui: 'x' };
lookupTable['tf']['t>'] = { state: 'lf', ui: 'z' };
lookupTable['tf']['tv'] = { state: 'bt', ui: '-x' };
lookupTable['tf']['t<'] = { state: 'tr', ui: '-z' };

lookupTable['tf']['f^'] = { state: 'fd', ui: 'x' };
lookupTable['tf']['f>'] = { state: 'tl', ui: 'y' };
lookupTable['tf']['fv'] = { state: 'bt', ui: '-x' };
lookupTable['tf']['f<'] = { state: 'tr', ui: '-y' };




export { lookupTable };