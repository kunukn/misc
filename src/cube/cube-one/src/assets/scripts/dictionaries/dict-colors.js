import deepFreeze from 'deep-freeze';

const dictColors = [];
dictColors['u'] = 'linear-gradient(135deg, #fff, #bbb)';
dictColors['f'] = 'linear-gradient(135deg, #009E60, white)';
dictColors['r'] = 'linear-gradient(135deg, #C41E3A, white)';
dictColors['l'] = 'linear-gradient(135deg, #FF5800, white)';
dictColors['b'] = 'linear-gradient(135deg, #0051BA, white)';
dictColors['d'] = 'linear-gradient(135deg, #FFD500, white)';
deepFreeze(dictColors);

export default dictColors;