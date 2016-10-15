import deepFreeze from 'deep-freeze';

const dictColors = [];
dictColors['u'] = 'red';
dictColors['f'] = 'lightgreen';
dictColors['r'] = 'beige';
dictColors['l'] = 'teal';
dictColors['b'] = 'orange';
dictColors['d'] = 'dodgerblue';
deepFreeze(dictColors);

export default dictColors;