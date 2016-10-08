import { ACTION } from '../constants';

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

const dictDegree = [];
dictDegree['.'] = 'rotateX(0deg)';
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

dictRotate['tf'] = ['.'];
dictRotate['tr'] = ['-y'];
dictRotate['tl'] = ['y'];
dictRotate['tb'] = ['2y'];

dictRotate['fd'] = ['x'];
dictRotate['fr'] = ['x', 'z'];
dictRotate['ft'] = ['x', '2z'];
dictRotate['fl'] = ['x', '-z'];

dictRotate['rd'] = ['-z', 'x'];
dictRotate['rb'] = ['-z', '2x'];
dictRotate['rt'] = ['-z', '-x'];
dictRotate['rf'] = ['-z'];

dictRotate['db'] = ['2x'];
dictRotate['dr'] = ['2x', 'y'];
dictRotate['df'] = ['2x', '2y'];
dictRotate['dl'] = ['2x', '-y'];

dictRotate['bd'] = ['-x', '2z'];
dictRotate['bl'] = ['-x', 'z'];
dictRotate['bt'] = ['-x'];
dictRotate['br'] = ['-x', '-z'];

dictRotate['ld'] = ['z', 'x'];
dictRotate['lf'] = ['z'];
dictRotate['lt'] = ['z', '-x'];
dictRotate['lb'] = ['z', '2x'];


export { dictUi };
export { dictDegree };
export { dictActionTypes };
export { dictRotate };