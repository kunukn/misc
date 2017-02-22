/* eslint-disable */

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-disable-flex', function (opts) {
  opts = opts || {};
  return function (css, result) {

    // Runs through all of the nodes (declorations) in the file
    css.walkDecls(declaration => { 
      if(declaration.prop === 'display' && declaration.value === 'flex'){
        declaration.value = 'postcss-disable-flex';
      }      
    });
  };
});

/* eslint-enabled */
