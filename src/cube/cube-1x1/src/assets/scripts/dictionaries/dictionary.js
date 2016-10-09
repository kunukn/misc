import { ACTION } from '../constants';

const dictDegree = [];
dictDegree['_'] = 'rotateX(0deg)';
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

const dictTransform = [];
dictTransform['_'] = { key: 'X', val: 0 };
dictTransform['x'] = { key: 'X', val: 90 };
dictTransform['-x'] = { key: 'X', val: -90 };
dictTransform['y'] = { key: 'Y', val: 90 };
dictTransform['-y'] = { key: 'Y', val: -90 };
dictTransform['z'] = { key: 'Z', val: 90 };
dictTransform['-z'] = { key: 'Z', val: -90 };
dictTransform['2x'] = { key: 'X', val: 180 };
dictTransform['-2x'] = { key: 'X', val: -180 };
dictTransform['2y'] = { key: 'Y', val: 180 };
dictTransform['-2y'] = { key: 'Y', val: -180 };
dictTransform['2z'] = { key: 'Z', val: 180 };
dictTransform['-2z'] = { key: 'Z', val: -180 };

const dictActionTypes = [];
dictActionTypes[ACTION.swipeup] = '^';
dictActionTypes[ACTION.swiperight] = '>';
dictActionTypes[ACTION.swipedown] = 'v';
dictActionTypes[ACTION.swipeleft] = '<';


const dictStateRotate = [];

dictStateRotate['tf'] = ['.'];
dictStateRotate['tr'] = ['-y'];
dictStateRotate['tl'] = ['y'];
dictStateRotate['tb'] = ['2y'];

dictStateRotate['fd'] = ['x'];
dictStateRotate['fr'] = ['x', 'z'];
dictStateRotate['ft'] = ['x', '2z'];
dictStateRotate['fl'] = ['x', '-z'];

dictStateRotate['rd'] = ['-z', 'x'];
dictStateRotate['rb'] = ['-z', '2x'];
dictStateRotate['rt'] = ['-z', '-x'];
dictStateRotate['rf'] = ['-z'];

dictStateRotate['db'] = ['2x'];
dictStateRotate['dr'] = ['2x', 'y'];
dictStateRotate['df'] = ['2x', '2y'];
dictStateRotate['dl'] = ['2x', '-y'];

dictStateRotate['bd'] = ['-x', '2z'];
dictStateRotate['bl'] = ['-x', 'z'];
dictStateRotate['bt'] = ['-x'];
dictStateRotate['br'] = ['-x', '-z'];

dictStateRotate['ld'] = ['z', 'x'];
dictStateRotate['lf'] = ['z'];
dictStateRotate['lt'] = ['z', '-x'];
dictStateRotate['lb'] = ['z', '2x'];


Object.freeze(dictStateRotate);
Object.freeze(dictActionTypes);
Object.freeze(dictTransform);

export { dictStateRotate };
export { dictActionTypes };
export { dictTransform };