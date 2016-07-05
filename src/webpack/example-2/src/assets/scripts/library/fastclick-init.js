/* Remove 300ms delay for touch devices click */
var FastClick = require('fastclick');
if (FastClick) {
    FastClick.attach(document.body);
    console.debug('fastclick init');
}

module.exports = "fastclick-init";
