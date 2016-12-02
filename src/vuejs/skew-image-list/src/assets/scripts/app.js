'use strict';

import styles from '../styles/app.scss'; // Apply styling
import vue from 'vue';

const log = console.log.bind(console);

log(vue);




log('App running');

const example1 = new Vue({
  el: '#skewImages',
  data: {
    isDebug: false,
    isSkewReversed: false,
    backgroundColor: 'transparent',
    borderColor: 'gray',
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
      // { backgroundImage: 'url("http://fillmurray.com/200/200")', backgroundColor: 'transparent'},
      // { backgroundImage: 'url("http://fillmurray.com/210/210")', backgroundColor: 'transparent'},
      // { backgroundImage: 'url("http://fillmurray.com/220/220")', backgroundColor: 'transparent'},
      // { backgroundImage: 'url("http://fillmurray.com/230/230")', backgroundColor: 'transparent'},
      // { backgroundImage: 'url("http://fillmurray.com/240/240")', backgroundColor: 'transparent'},
      // { backgroundImage: 'url("http://fillmurray.com/250/250")', backgroundColor: 'transparent'},
      // { backgroundImage: 'url("http://fillmurray.com/200/200")', backgroundColor: 'transparent'},
      // { backgroundImage: 'url("http://fillmurray.com/210/210")', backgroundColor: 'transparent'},
      // { backgroundImage: 'url("http://fillmurray.com/220/220")', backgroundColor: 'transparent'},
      // { backgroundImage: 'url("http://fillmurray.com/230/230")', backgroundColor: 'transparent'},
      // { backgroundImage: 'url("http://fillmurray.com/240/240")', backgroundColor: 'transparent'},
      // { backgroundImage: 'url("http://fillmurray.com/250/250")', backgroundColor: 'transparent'},         
      // { backgroundImage: 'url("http://fillmurray.com/200/200")', backgroundColor: 'transparent'},
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

