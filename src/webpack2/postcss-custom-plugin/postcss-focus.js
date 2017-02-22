/* eslint-disable */

// https://css-tricks.com/want-make-postcss-plugin/

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-focus', function () {
  return function (css) {

    // Callback for each rule node.
    css.walkRules(function (rule) { 

      // Match the individual rule selector 
      if ( rule.selector.indexOf(':hover') !== -1 ) { 

         // Array to contain the rule’s individual selector.
        var focuses = []; 
        rule.selectors.forEach(function (selector) { 

           // Passes all declaration values within the match of hover replacing those values with the returned result of focus.
          if ( selector.indexOf(':hover') !== -1 ) {

            focuses.push(selector.replace(/:hover/g, ':focus')); 
          }

        });

        // Checks if array contain values
        if ( focuses.length ) { 
          // Concat the original rules with the new duplicated :focus rules 
          // Groups of selectors are automatically split with commas.
          rule.selectors = rule.selectors.concat(focuses);
        }
      }
    });
  };
});

/* eslint-enabled */
