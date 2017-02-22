/* eslint-disable */

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-disable-property-value', function (options) {
  var options = options || {}

  return function (root, result) {

    if (Object.keys(options).length) {

      // Runs through all of the nodes (declorations) in the file
      root.walkDecls(declaration => {

        if (options[declaration.prop]) {
          var val = options[declaration.prop];
          if (val === declaration.value) {
            declaration.value = 'postcss-disable-' + val;
          }
        }
      });
    }
  };
});

/* eslint-enabled */
