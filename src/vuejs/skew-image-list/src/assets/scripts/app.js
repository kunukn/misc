'use strict';

import styles from '../styles/app.scss'; // Apply styling

const log = console.log.bind(console);

log('App running');

const example1 = new Vue({
  el: '#skew-images',
  data: {
    isDebug: false,
    isSkewReversed: false,
    items: [
      { backgroundImage: 'url("http://fillmurray.com/200/200")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/210/210")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/220/220")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/230/230")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/240/240")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/250/250")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/200/200")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/210/210")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/220/220")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/230/230")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/240/240")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/250/250")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/200/200")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/210/210")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/220/220")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/230/230")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/240/240")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/250/250")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/200/200")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/210/210")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/220/220")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/230/230")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/240/240")', backgroundColor: 'transparent'},
      { backgroundImage: 'url("http://fillmurray.com/250/250")', backgroundColor: 'transparent'},         
      { backgroundImage: 'url("http://fillmurray.com/200/200")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/210/210")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/220/220")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/230/230")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/240/240")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/250/250")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/200/200")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/210/210")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/220/220")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/230/230")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/240/240")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/250/250")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/200/200")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/210/210")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/220/220")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/230/230")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/240/240")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/250/250")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/200/200")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/210/210")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/220/220")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/230/230")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/240/240")', backgroundColor: 'transparent'},
    //   { backgroundImage: 'url("http://fillmurray.com/250/250")', backgroundColor: 'transparent'},         
    ]
  }
})


export class App{
}

