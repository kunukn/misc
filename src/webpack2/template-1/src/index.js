import './index.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

console.log('app is running...');

render(<App />, document.querySelector('#root'));
