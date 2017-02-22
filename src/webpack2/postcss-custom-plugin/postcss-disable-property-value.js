/* eslint-disable */

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-disable-property-value', function (options) {
  var options = options || {};

  return function (root, result) {

    //result.warn(      JSON.stringify(options));
    var props = Object.keys(options);
    props.map(function (prop, index) {
      root.walkDecls(prop, function (decl) {
          var value = options[prop];
           result.warn( prop);
           result.warn( value + '');
           result.warn( decl.value);

          if (value === decl.value) {
            //decl.remove();
            decl.prop = prop + '__postcss-disable';
          }
        })
    });
  };
});

/* eslint-enabled */
