import styles from '../styles/app.scss'; // Apply styling
import jquery from 'jquery';
import app from './app';

const log = console.log.bind(console);

log(`app is ready - ${new Date().getTime()}`);

window.nst = app.nst;
window.jQueryToggle = app.jQueryToggle;

export default {};