import { STATES } from '../constants';
import deepFreeze from 'deep-freeze';


const dictCubeTransform = [];

Object.keys(STATES).forEach(i => dictCubeTransform[i] = []);

dictCubeTransform['fd']['u'] = '';
dictCubeTransform['fd']['f'] = '';
dictCubeTransform['fd']['r'] = {angle: 90, dir: 'Z'};
dictCubeTransform['fd']['l'] = '';
dictCubeTransform['fd']['b'] = '';
dictCubeTransform['fd']['d'] = '';

deepFreeze(dictCubeTransform);
export default dictCubeTransform;