import { STATES } from '../constants';
import deepFreeze from 'deep-freeze';

const dictCubeTransform = [];

Object.keys(STATES).forEach(i => dictCubeTransform[i] = []);

dictCubeTransform['lf']['u'] = { angle: 90, dir: 'Z' };
dictCubeTransform['rf']['u'] = { angle: -90, dir: 'Z' };
dictCubeTransform['fl']['u'] = { angle: -90, dir: 'Z' };
dictCubeTransform['fu']['u'] = { angle: 180, dir: 'Z' };
dictCubeTransform['fr']['u'] = { angle: 90, dir: 'Z' };
dictCubeTransform['bl']['u'] = { angle: 90, dir: 'Z' };
dictCubeTransform['dl']['u'] = { angle: -90, dir: 'Z' };

dictCubeTransform['lf']['f'] = { angle: 90, dir: 'Z' };
dictCubeTransform['rf']['f'] = { angle: -90, dir: 'Z' };
dictCubeTransform['db']['f'] = { angle: 180, dir: 'Z' };
dictCubeTransform['fl']['f'] = { angle: -90, dir: 'Z' };
dictCubeTransform['dl']['f'] = { angle: 180, dir: 'Z' };
dictCubeTransform['bl']['f'] = { angle: 90, dir: 'Z' };
dictCubeTransform['rd']['f'] = { angle: -90, dir: 'Z' };
dictCubeTransform['ld']['f'] = { angle: 90, dir: 'Z' };
dictCubeTransform['bd']['f'] = { angle: 180, dir: 'Z' };
dictCubeTransform['br']['f'] = { angle: -90, dir: 'Z' };

dictCubeTransform['fd']['r'] = { angle: 90, dir: 'Z' };
dictCubeTransform['db']['r'] = { angle: 180, dir: 'Z' };
dictCubeTransform['bu']['r'] = { angle: -90, dir: 'Z' };
dictCubeTransform['ld']['r'] = { angle: 90, dir: 'Z' };
dictCubeTransform['rd']['r'] = { angle: 90, dir: 'Z' };
dictCubeTransform['dl']['r'] = { angle: 180, dir: 'Z' };
dictCubeTransform['lu']['r'] = { angle: -90, dir: 'Z' };
dictCubeTransform['lf']['r'] = { angle: 90, dir: 'Z' };
dictCubeTransform['rf']['r'] = { angle: -90, dir: 'Z' };
dictCubeTransform['bd']['r'] = { angle: 90, dir: 'Z' };
dictCubeTransform['br']['r'] = { angle: 180, dir: 'Z' };

dictCubeTransform['fd']['l'] = { angle: -90, dir: 'Z' };
dictCubeTransform['db']['l'] = { angle: 180, dir: 'Z' };
dictCubeTransform['bu']['l'] = { angle: 90, dir: 'Z' };
dictCubeTransform['rf']['l'] = { angle: -90, dir: 'Z' };
dictCubeTransform['fl']['l'] = { angle: 180, dir: 'Z' };
dictCubeTransform['rd']['l'] = { angle: -90, dir: 'Z' };
dictCubeTransform['bl']['l'] = { angle: 180, dir: 'Z' };
dictCubeTransform['bd']['l'] = { angle: -90, dir: 'Z' };

dictCubeTransform['ul']['u'] = { angle: -90, dir: 'Z' };
dictCubeTransform['ur']['u'] = { angle: 90, dir: 'Z' };
dictCubeTransform['ub']['u'] = { angle: 180, dir: 'Z' };
dictCubeTransform['bu']['u'] = { angle: 180, dir: 'Z' };

dictCubeTransform['fd']['b'] = { angle: 180, dir: 'Z' };
dictCubeTransform['dr']['b'] = { angle: 180, dir: 'Z' };
dictCubeTransform['db']['b'] = { angle: 180, dir: 'Z' };
dictCubeTransform['bu']['b'] = { angle: 180, dir: 'Z' };
dictCubeTransform['bl']['b'] = { angle: -90, dir: 'Z' };


dictCubeTransform['lf']['d'] = { angle: 90, dir: 'Z' };
dictCubeTransform['fd']['d'] = { angle: 180, dir: 'Z' };
dictCubeTransform['dl']['d'] = { angle: 90, dir: 'Z' };
dictCubeTransform['ul']['d'] = { angle: 90, dir: 'Z' };
dictCubeTransform['bl']['d'] = { angle: 90, dir: 'Z' };
dictCubeTransform['ur']['d'] = { angle: -90, dir: 'Z' };
dictCubeTransform['ub']['d'] = { angle: 180, dir: 'Z' };
dictCubeTransform['br']['d'] = { angle: -90, dir: 'Z' };
dictCubeTransform['bd']['d'] = { angle: 180, dir: 'Z' };

deepFreeze(dictCubeTransform);
export default dictCubeTransform;