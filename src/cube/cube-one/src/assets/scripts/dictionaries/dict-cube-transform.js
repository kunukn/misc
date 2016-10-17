import { STATES } from '../constants';
import deepFreeze from 'deep-freeze';


const dictCubeTransform = [];

Object.keys(STATES).forEach(i => dictCubeTransform[i] = []);

dictCubeTransform['fd']['r'] = { angle: 90, dir: 'Z' };
dictCubeTransform['db']['r'] = { angle: 180, dir: 'Z' };
dictCubeTransform['bu']['r'] = { angle: -90, dir: 'Z' };

dictCubeTransform['fd']['l'] = { angle: -90, dir: 'Z' };
dictCubeTransform['db']['l'] = { angle: 180, dir: 'Z' };
dictCubeTransform['bu']['l'] = { angle: 90, dir: 'Z' };

dictCubeTransform['ul']['u'] = { angle: -90, dir: 'Z' };
dictCubeTransform['ur']['u'] = { angle: 90, dir: 'Z' };
dictCubeTransform['ub']['u'] = { angle: 180, dir: 'Z' };


deepFreeze(dictCubeTransform);
export default dictCubeTransform;